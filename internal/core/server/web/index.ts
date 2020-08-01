/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Server, ServerRequest, WebBridge} from "@internal/core";
import Bundler from "../bundler/Bundler";
import {WebSocketInterface} from "@internal/codec-websocket";
import http = require("http");
import {Reporter} from "@internal/cli-reporter";
import {
	ServerQueryRequest,
	ServerQueryResponse,
} from "../../common/bridges/ServerBridge";
import {ServerMarker} from "../Server";
import {ClientFlagsJSON} from "../../common/types/client";
import WebRequest, {stripBundleSuffix} from "./WebRequest";
import {BundlerConfig} from "../../common/types/bundler";
import {AbsoluteFilePath} from "@internal/path";
import {PLATFORMS} from "../../common/types/platform";
import {HmrServerMessage} from "./hmr";
import {ConsumableUrl} from "@internal/codec-url";
import {DEFAULT_TERMINAL_FEATURES} from "@internal/cli-environment";
import {markup} from "@internal/markup";

export type WebServerTime = {
	startTime: number;
	endTime: undefined | number;
};

export type WebServerClient = WebServerTime & {
	id: number;
	flags: ClientFlagsJSON;
	stdoutAnsi: string;
	stdoutHTML: string;
};

export type WebServerRequest = WebServerTime & {
	id: number;
	client: number;
	query: ServerQueryRequest;
	markers: Array<ServerMarker>;
	response: undefined | ServerQueryResponse;
};

export class WebServer {
	constructor(req: ServerRequest) {
		const {server} = req;

		this.serverRequest = req;
		this.reporter = req.reporter;
		this.server = server;

		this.bundlerCache = new Map();

		this.savingRequests = false;
		this.clientRequestHistory = new Map();
		this.clientHistory = new Map();

		this.deviceWebsockets = new Set();
		this.frontendWebsocketBridges = new Set();

		this.httpServer = http.createServer((req, res) => {
			const webRequest = new WebRequest(this, req, res);
			webRequest.dispatch();
		});

		server.clientStartEvent.subscribe((client) => {
			if (!this.savingRequests) {
				return;
			}

			const data: WebServerClient = {
				id: client.id,
				flags: {
					...client.flags,
					realCwd: client.flags.realCwd.join(),
					cwd: client.flags.cwd.join(),
				},
				startTime: Date.now(),
				endTime: undefined,
				stdoutAnsi: "",
				stdoutHTML: "",
			};
			this.clientHistory.set(client.id, data);
			this.refreshRequests();

			const ansiReporterStream = client.reporter.addStream({
				format: "ansi",
				features: DEFAULT_TERMINAL_FEATURES,
				write(chunk) {
					data.stdoutAnsi += chunk;
				},
			});

			const htmlReporterStream = client.reporter.addStream({
				format: "html",
				features: DEFAULT_TERMINAL_FEATURES,
				write(chunk) {
					data.stdoutHTML += chunk;
				},
			});

			const handles = [
				ansiReporterStream,
				htmlReporterStream,
				server.connectedReporters.addAttachedStream(ansiReporterStream.stream),
				server.connectedReporters.addAttachedStream(htmlReporterStream.stream),
			];

			client.bridge.endEvent.subscribe(() => {
				for (const handle of handles) {
					handle.remove();
				}

				data.endTime = Date.now();
				this.refreshRequests();
			});
		});

		server.requestStartEvent.subscribe((request) => {
			if (!this.savingRequests) {
				return;
			}

			const data: WebServerRequest = {
				id: request.id,
				client: request.client.id,
				query: request.query,
				markers: [],
				response: undefined,
				startTime: Date.now(),
				endTime: undefined,
			};
			this.clientRequestHistory.set(request.id, data);
			this.refreshRequests();

			request.markerEvent.subscribe((marker) => {
				data.markers.push(marker);
				this.refreshRequests();
			});

			request.endEvent.subscribe((response) => {
				// Update completion fields
				data.response = response;
				data.endTime = Date.now();
				this.refreshRequests();
			});
		});
	}

	bundlerCache: Map<string, Bundler>;

	savingRequests: boolean;
	clientRequestHistory: Map<number, WebServerRequest>;
	clientHistory: Map<number, WebServerClient>;

	deviceWebsockets: Set<WebSocketInterface>;
	frontendWebsocketBridges: Set<WebBridge>;

	reporter: Reporter;
	serverRequest: ServerRequest;
	server: Server;
	httpServer: http.Server;

	sendRequests(bridge: WebBridge) {
		bridge.requests.send({
			requests: Array.from(this.clientRequestHistory.values()),
			clients: Array.from(this.clientHistory.values()),
		});
	}

	refreshRequests() {
		for (const bridge of this.frontendWebsocketBridges) {
			this.sendRequests(bridge);
		}
	}

	close() {
		this.httpServer.close();
	}

	listen(port: number) {
		this.httpServer.listen(port);

		this.reporter.clearScreen();
		const url = `http://localhost:${String(port)}`;
		this.reporter.success(
			markup`Listening on <hyperlink emphasis>${url}</hyperlink>`,
		);
		this.reporter.info(
			markup`Web console available at <hyperlink emphasis>${url}/__rome__</hyperlink>`,
		);
	}

	async pathnameToAbsolutePath(
		pathname: string,
	): Promise<undefined | AbsoluteFilePath> {
		const project = await this.serverRequest.assertClientCwdProject();
		const possibleStaticPath = project.directory.append(pathname);

		// This check makes sure that files outside of the project directory cannot be served
		if (possibleStaticPath.isRelativeTo(project.directory)) {
			return possibleStaticPath;
		} else {
			return undefined;
		}
	}

	sendToAllDeviceWebsockets(msg: HmrServerMessage) {
		const text = JSON.stringify(msg);
		for (const socket of this.deviceWebsockets) {
			socket.send(text);
		}
	}

	async getBundler(
		url: ConsumableUrl,
	): Promise<{
		bundler: Bundler;
		path: AbsoluteFilePath;
	}> {
		const pathname = stripBundleSuffix(String(url.path.asString()));

		const absolute = await this.pathnameToAbsolutePath(pathname);
		if (absolute === undefined) {
			throw new Error("Pathname is attempting to escalate out of cwd");
		}

		const pathPointer = url.path.getDiagnosticLocation();
		const path = await this.server.resolver.resolveEntryAssertPath(
			{
				origin: this.serverRequest.client.flags.cwd,
				source: absolute,
			},
			pathPointer === undefined ? undefined : {location: pathPointer},
		);

		const platform = url.query.get("platform").asStringSetOrVoid(PLATFORMS);
		const cacheKey = JSON.stringify({
			platform,
		});

		const cached = this.bundlerCache.get(cacheKey);
		if (cached !== undefined) {
			return {bundler: cached, path};
		}

		const bundlerConfig: BundlerConfig = this.serverRequest.getBundlerConfigFromFlags({
			platform,
		});

		const bundler = new Bundler(this.serverRequest, bundlerConfig);
		this.bundlerCache.set(cacheKey, bundler);
		return {bundler, path};
	}
}

import {AbsoluteFilePath, createAbsoluteFilePath} from "@romefrontend/path";
import {readFileText, writeFile as writeFileReal} from "@romefrontend/fs";
import {Reporter} from "@romefrontend/cli-reporter";
import {createMockWorker} from "@romefrontend/test-helpers";

import crypto = require("crypto");
import child = require("child_process");

export const reporter = Reporter.fromProcess();
export const integrationWorker = createMockWorker();

export const ROOT = findRoot();
export const PACKAGES = ROOT.appendList("packages", "@romefrontend");

const COMMENT_REGEX = /(\/\/|<!--) EVERYTHING BELOW IS AUTOGENERATED\. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS([\s\S]+)$/;
const COMMENT_TEXT = "EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS";

// This is only necessary because we have poor support for __dirname in the bundler
function findRoot(): AbsoluteFilePath {
	let pickNext = false;

	for (const path of createAbsoluteFilePath(__dirname).getChain()) {
		if (pickNext) {
			return path;
		}

		if (path.getBasename() === "scripts") {
			pickNext = true;
		}
	}

	throw new Error("Could not find the root");
}

export async function modifyGeneratedFile(
	path: AbsoluteFilePath,
	callback: () => Promise<{
		lines: Array<string>;
		hash?: string;
	}>,
): Promise<void> {
	const {lines, hash} = await callback();
	const trailing = lines.join("\n");

	const file = await readGeneratedFile(path, hash || trailing);
	if (file === undefined) {
		reporter.warn(
			`Generated file <emphasis>${path.toMarkup()}</emphasis> is the same`,
		);
		return;
	}

	await writeFile(path, file + trailing);
}

async function readGeneratedFile(
	path: AbsoluteFilePath,
	hashContent: undefined | string,
): Promise<undefined | string> {
	let file = await readFileText(path);
	const isJS = path.hasExtension("ts") || path.hasExtension("js");

	// Check if the generated file has the same hash
	let hash;
	if (hashContent !== undefined) {
		hash = crypto.createHash("sha1").update(hashContent).digest("hex");

		const currentHash = file.match(/hash\((.*?)\)/);
		if (currentHash != null && hash === currentHash[1]) {
			return undefined;
		}
	}

	// Remove everything after the comment
	file = file.replace(COMMENT_REGEX, "");
	file = file.trim();
	file += "\n\n";

	// Add the comment back on
	if (isJS) {
		file += "// ";
	} else {
		file += "<!-- ";
	}
	file += COMMENT_TEXT;
	if (hash !== undefined) {
		file += ` hash(${hash})`;
	}
	if (!isJS) {
		file += " -->";
	}
	file += "\n\n";

	return file;
}

export async function writeFile(path: AbsoluteFilePath, sourceText: string) {
	// We don't support formatting markdown yet
	if (!path.hasEndExtension("md")) {
		sourceText = await integrationWorker.performFileOperation(
			{
				real: path,
				uid: ROOT.relative(path).join(),
				sourceText,
			},
			async (ref) => {
				const res = await integrationWorker.worker.api.format(ref, {}, {});
				if (res === undefined) {
					throw new Error(`Expected format for ${path.join()}`);
				} else {
					return res.formatted;
				}
			},
		);
	}

	// Windows: `content` will always have `\r` stripped so add it back
	if (process.platform === "win32") {
		sourceText = sourceText.replace(/\n/g, "\r\n");
	}

	// Write
	await writeFileReal(path, sourceText);
	reporter.success(`Wrote <emphasis>${path.toMarkup()}</emphasis>`);
}

export function waitChildProcess(
	proc: child.ChildProcess,
): Promise<child.ChildProcess> {
	return new Promise((resolve) => {
		proc.on(
			"close",
			() => {
				resolve(proc);
			},
		);
	});
}

export async function exec(
	cmd: string,
	args: Array<string>,
	opts: child.SpawnOptions = {},
): Promise<void> {
	reporter.command(`${cmd} ${args.join(" ")}`);

	const proc = await waitChildProcess(
		child.spawn(
			cmd,
			args,
			{
				stdio: "inherit",
				...opts,
			},
		),
	);

	if (proc.exitCode !== 0) {
		reporter.error(`Exit code ${proc.exitCode}`);
		process.exit(proc.exitCode || 0);
	}
}

export async function execDev(args: Array<string>): Promise<void> {
	await waitChildProcess(
		child.spawn(
			process.execPath,
			[ROOT.append("scripts/dev-rome.cjs").join(), ...args],
			{
				stdio: "inherit",
			},
		),
	);
}

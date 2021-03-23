import {
	CSSAtRule,
	CSSBlock,
	CSSDeclaration,
	CSSRule,
	cssBlock,
	cssDeclaration,
	cssIdentifier,
} from "@internal/ast";
import {UnknownObject} from "@internal/typescript-helpers";
import {
	CompilerPath,
	EnterSignal,
	ExitSignal,
	Visitor,
	signals,
} from "@internal/compiler";
import {Browser} from "@internal/browser-features/Browser";
import {ProjectConfig} from "@internal/project";
import {getBrowser} from "@internal/browser-features";
import {
	VisitorStateEnter,
	VisitorStateExit,
} from "@internal/compiler/lib/VisitorState";
import {AnyCSSValue} from "@internal/css-parser/types";

export function nodeHasPrefixedProperty(
	node: CSSBlock,
	property: string,
	prefix: string,
	rename: (propertyName: string) => string = (propertyName) => propertyName,
): boolean {
	if (node.value) {
		return node.value.some((n) =>
			n.type === "CSSDeclaration" && n.name === rename(`-${prefix}-${property}`)
		);
	}
	return false;
}

export function nodeHasPrefixedPropertyValue(
	node: CSSBlock,
	property: string,
	value: string,
	prefix: string,
	rename: (value: string) => string = (value) => value,
): boolean {
	if (node.value) {
		return node.value.some((n) =>
			n.type === "CSSDeclaration" &&
			n.name === property &&
			n.value.length === 1 &&
			n.value[0]?.type === "CSSIdentifier" &&
			n.value[0].value === rename(`-${prefix}-${value}`)
		);
	}
	return false;
}

export function findPropertyIndex(node: CSSBlock, property: string): number {
	if (node.value !== undefined) {
		return node.value.findIndex((n) =>
			n.type === "CSSDeclaration" && n.name === property
		);
	} else {
		return -1;
	}
}

export function findPropertyValueIndex(
	node: CSSBlock,
	property: string,
	value: string,
): number {
	if (node.value !== undefined) {
		return node.value.findIndex((n) =>
			n.type === "CSSDeclaration" &&
			n.name === property &&
			n.value.length === 1 &&
			n.value[0]?.type === "CSSIdentifier" &&
			n.value[0].value === value
		);
	} else {
		return -1;
	}
}

type PrefixCompilerPath = CompilerPath & {
	node: CSSBlock & {
		value: Array<AnyCSSValue | CSSRule | CSSAtRule | CSSDeclaration>;
	};
};

export interface PrefixVisitor<State extends UnknownObject> {
	name: string;
	enter?: (
		path: PrefixCompilerPath,
		state: VisitorStateEnter<State>,
	) => EnterSignal;
	exit?: (
		path: PrefixCompilerPath,
		state: VisitorStateExit<State>,
	) => ExitSignal;
}

export function createPrefixVisitor<State extends UnknownObject>(
	visitor: PrefixVisitor<State>,
): Visitor<State> {
	return {
		name: `css-handler/prefix/${visitor.name}`,
		enter: (path: CompilerPath, state: VisitorStateEnter<State>) => {
			if (
				visitor.enter !== undefined &&
				path.node.type === "CSSBlock" &&
				path.node.value &&
				path.node.value.length > 0
			) {
				return visitor.enter(path as PrefixCompilerPath, state);
			} else {
				return signals.retain;
			}
		},
		exit: (path: CompilerPath, state: VisitorStateExit<State>) => {
			if (
				visitor.exit !== undefined &&
				path.node.type === "CSSBlock" &&
				path.node.value &&
				path.node.value.length > 0
			) {
				return visitor.exit(path as PrefixCompilerPath, state);
			} else {
				return signals.retain;
			}
		},
	};
}

interface PrefixCSSPropertyProps {
	path: PrefixCompilerPath;
	propertyName: string;
	browserFeaturesKey: string;
	rename?: (propertyName: string) => string;
}

interface PrefixCSSValueProps extends PrefixCSSPropertyProps {
	value: string;
	rename?: (value: string) => string;
}

const prefixCache: Map<string, Set<string>> = new Map();

function getPrefixes(
	targets: Browser[],
	browserFeaturesKey: string,
): Set<string> {
	if (!prefixCache.has(browserFeaturesKey)) {
		const prefixes = new Set<string>();
		for (const browser of targets) {
			if (browser.cssFeatureRequiresPrefix(browserFeaturesKey)) {
				prefixes.add(browser.getPrefix());
			}
		}

		prefixCache.set(browserFeaturesKey, prefixes);
	}
	// `!` thanks Typescript
	return prefixCache.get(browserFeaturesKey)!;
}

export function prefixCSSProperty(
	{
		path,
		propertyName,
		browserFeaturesKey,
		rename = (propertyName) => propertyName,
	}: PrefixCSSPropertyProps,
) {
	const {node} = path;
	const propertyIndex = findPropertyIndex(node, propertyName);
	if (propertyIndex > -1) {
		const property = node.value[propertyIndex] as CSSDeclaration;
		const newDeclarations = [];

		for (const prefix of getPrefixes(getTargets(path), browserFeaturesKey)) {
			const hasPrefix = nodeHasPrefixedProperty(
				node,
				propertyName,
				prefix,
				rename,
			);
			if (!hasPrefix) {
				newDeclarations.push(
					cssDeclaration.create({
						name: rename(`-${prefix}-${property.name}`),
						value: property.value,
						important: property.important,
					}),
				);
			}
		}
		if (newDeclarations.length > 0) {
			const block = cssBlock.create({
				...node,
				value: [
					...node.value.slice(0, propertyIndex),
					...newDeclarations,
					property,
					...node.value.slice(propertyIndex + 1, node.value.length),
				],
			});
			return signals.replace(block);
		}
	}

	return signals.retain;
}

export function prefixCSSValue(
	{
		path,
		propertyName,
		value,
		browserFeaturesKey,
		rename = (value) => value,
	}: PrefixCSSValueProps,
) {
	const {node} = path;

	const propertyIndex = findPropertyValueIndex(node, propertyName, value);
	if (propertyIndex > -1) {
		const property = node.value[propertyIndex] as CSSDeclaration;
		const newDeclarations = [];
		for (const prefix of getPrefixes(getTargets(path), browserFeaturesKey)) {
			const hasPrefix = nodeHasPrefixedPropertyValue(
				node,
				propertyName,
				value,
				prefix,
				rename,
			);
			if (!hasPrefix) {
				newDeclarations.push(
					cssDeclaration.create({
						name: property.name,
						value: [
							cssIdentifier.create({value: rename(`-${prefix}-${value}`)}),
						],
						important: property.important,
					}),
				);
			}
		}
		if (newDeclarations.length > 0) {
			const block = cssBlock.create({
				...node,
				value: [
					...node.value.slice(0, propertyIndex),
					...newDeclarations,
					property,
					...node.value.slice(propertyIndex + 1, node.value.length),
				],
			});
			return signals.replace(block);
		}
	}

	return signals.retain;
}

const projectConfigToTargets: WeakMap<ProjectConfig, Browser[]> = new WeakMap();

function getTargets(path: CompilerPath): Browser[] {
	const projectConfig = path.context.project.config;
	const existing = projectConfigToTargets.get(projectConfig);
	if (existing !== undefined) {
		return existing;
	}

	const propsTargets =
		projectConfig.targets.get(path.context.options.target ?? "default") ?? [];
	const targets = propsTargets.map((props) => getBrowser(props));
	projectConfigToTargets.set(projectConfig, targets);
	return targets;
}

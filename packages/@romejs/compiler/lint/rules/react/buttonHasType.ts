import {Path, Scope, TransformExitResult} from "@romejs/compiler";
import {descriptions} from "@romejs/diagnostics";
import {AnyNode} from "@romejs/ast";
import {
	getJSXAttribute,
	hasJSXAttribute,
	isJSXElement,
	tryStaticEvaluation,
} from "@romejs/js-ast-utils";
import {
	analyzeCreateElementProp,
	getCreateElementType,
} from "../../utils/react";

const BUTTON_TYPE_REGEX = /^(reset)|(submit)|(button)$/;

function createElementMissingType(node: AnyNode, scope: Scope) {
	if (getCreateElementType(node, scope) !== "button") {
		return;
	}
	const elementType = analyzeCreateElementProp(node, scope, "type");
	return typeof elementType !== "string" || !BUTTON_TYPE_REGEX.test(elementType);
}

function jsxMissingType(node: AnyNode, scope: Scope) {
	if (!isJSXElement(node, "button")) {
		return false;
	}
	if (!hasJSXAttribute(node, "type")) {
		return true;
	}
	const valueNode = getJSXAttribute(node, "type");
	const {value} = tryStaticEvaluation(valueNode?.value, scope);
	if (typeof value !== "string" || !BUTTON_TYPE_REGEX.test(value)) {
		return true;
	}
	return false;
}

export default {
	name: "reactButtonHasType",
	enter(path: Path): TransformExitResult {
		const {node, scope} = path;

		if (createElementMissingType(node, scope) || jsxMissingType(node, scope)) {
			path.context.addNodeDiagnostic(
				(isJSXElement(node, "button") && getJSXAttribute(node, "type")) || node,
				descriptions.LINT.REACT_BUTTON_HAS_TYPE,
			);
		}

		return node;
	},
};

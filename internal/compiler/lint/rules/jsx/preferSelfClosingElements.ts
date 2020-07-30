import {createVisitor, signals} from "@internal/compiler";
import {descriptions} from "@internal/diagnostics";

export default createVisitor({
	name: "jsx/preferSelfClosingElements",
	enter(path) {
		const {node} = path;

		if (
			node.type === "JSXElement" &&
			!node.selfClosing &&
			node.children.length === 0
		) {
			return path.addFixableDiagnostic(
				{
					fixed: signals.replace({
						...node,
						selfClosing: true,
					}),
				},
				descriptions.LINT.JSX_PREFER_SELF_CLOSING_ELEMENTS,
			);
		}

		return signals.retain;
	},
});

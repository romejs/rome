import {
	createPrefixVisitor,
	prefixCSSProperty,
} from "@internal/compiler/transforms/compile/css-handler/prefix/utils";

// https://github.com/Fyrd/caniuse/blob/main/features-json/transforms2d.json
export default createPrefixVisitor({
	name: "transform",
	enter(path, targets) {
		return prefixCSSProperty(path, "transform", "transforms2d", targets);
	},
});
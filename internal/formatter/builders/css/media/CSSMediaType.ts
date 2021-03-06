import {CSSMediaType} from "@internal/ast";
import {Builder, Token} from "@internal/formatter";

export default function CSSMediaType(
	builder: Builder,
	node: CSSMediaType,
): Token {
	return node.value;
}

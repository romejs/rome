import {NodeBaseWithComments} from "@internal/ast";
import {createBuilder} from "@internal/ast/utils";

export interface CSSPercentage extends NodeBaseWithComments {
	readonly type: "CSSPercentage";
	readonly value: number;
}
export const cssPercentage = createBuilder<CSSPercentage>(
	"CSSPercentage",
	{
		bindingKeys: {},
		visitorKeys: {
			value: true,
		},
	},
);

import {NodeBaseWithComments} from "@romefrontend/ast";
import {createBuilder} from "@romefrontend/ast/utils";

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

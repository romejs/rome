import {NodeBaseWithComments} from "../../index";
import {createBuilder} from "../../utils";

export type CSSRatioType = NodeBaseWithComments & {
	type: "CSSRatioType";
};

export const cssRatioType = createBuilder<CSSRatioType>(
	"CSSRatioType",
	{
		bindingKeys: {},
		visitorKeys: {},
	},
);

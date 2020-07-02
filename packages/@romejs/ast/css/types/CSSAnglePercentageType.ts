import {NodeBaseWithComments} from "../../index";
import {createBuilder} from "../../utils";

export type CSSAnglePercentageType = NodeBaseWithComments & {
	type: "CSSAnglePercentageType";
};

export const cssAnglePercentageType = createBuilder<CSSAnglePercentageType>(
	"CSSAnglePercentageType",
	{
		bindingKeys: {},
		visitorKeys: {},
	},
);

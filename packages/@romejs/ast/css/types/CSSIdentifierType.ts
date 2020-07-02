import {NodeBaseWithComments} from "../../index";
import {createBuilder} from "../../utils";

export type CSSIdentifierType = NodeBaseWithComments & {
	type: "CSSIdentifierType";
};

export const cssIdentifierType = createBuilder<CSSIdentifierType>(
	"CSSIdentifierType",
	{
		bindingKeys: {},
		visitorKeys: {},
	},
);

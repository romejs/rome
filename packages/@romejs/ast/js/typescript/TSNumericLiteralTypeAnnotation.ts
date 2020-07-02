/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {NodeBaseWithComments, JSNumericLiteral} from "@romejs/ast";
import {createBuilder} from "../../utils";

export type TSNumericLiteralTypeAnnotation = NodeBaseWithComments & {
	type: "TSNumericLiteralTypeAnnotation";
	value: number;
	format?: JSNumericLiteral["format"];
};

export const tsNumericLiteralTypeAnnotation = createBuilder<TSNumericLiteralTypeAnnotation>(
	"TSNumericLiteralTypeAnnotation",
	{
		bindingKeys: {},
		visitorKeys: {},
	},
);

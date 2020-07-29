/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {NodeBaseWithComments} from "@romefrontend/ast";
import {createBuilder} from "../../utils";

export interface JSSuper extends NodeBaseWithComments {
	readonly type: "JSSuper";
}

export const jsSuper = createBuilder<JSSuper>(
	"JSSuper",
	{
		bindingKeys: {},
		visitorKeys: {},
	},
);

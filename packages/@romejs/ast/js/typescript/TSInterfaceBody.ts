/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AnyTSTypeElement, NodeBaseWithComments} from "@romejs/ast";
import {createBuilder} from "../../utils";

export type TSInterfaceBody = NodeBaseWithComments & {
	type: "TSInterfaceBody";
	body: Array<AnyTSTypeElement>;
};

export const tsInterfaceBody = createBuilder<TSInterfaceBody>(
	"TSInterfaceBody",
	{
		bindingKeys: {},
		visitorKeys: {
			body: true,
		},
	},
);

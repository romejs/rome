/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AnyTSPrimary, NodeBaseWithComments} from "@romefrontend/ast";
import {createBuilder} from "../../utils";

export interface TSIndexedAccessType extends NodeBaseWithComments {
	type: "TSIndexedAccessType";
	objectType: AnyTSPrimary;
	indexType: AnyTSPrimary;
}

export const tsIndexedAccessType = createBuilder<TSIndexedAccessType>(
	"TSIndexedAccessType",
	{
		bindingKeys: {},
		visitorKeys: {
			objectType: true,
			indexType: true,
		},
	},
);

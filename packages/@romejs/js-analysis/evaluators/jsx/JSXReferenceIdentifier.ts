/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Scope} from '../../scopes';
import {
  JSXReferenceIdentifier,
  jsxReferenceIdentifier,
  AnyNode,
} from '@romejs/js-ast';

export default function JSXReferenceIdentifier(node: AnyNode, scope: Scope) {
  node = jsxReferenceIdentifier.assert(node);
  throw new Error('unimplemented');
}

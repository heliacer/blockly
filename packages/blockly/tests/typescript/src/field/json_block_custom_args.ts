/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {defineBlocksWithJsonArray} from 'blockly-test/core';
import type {JsonBlockDefinition} from 'blockly-test/core/interfaces/i_json_block_definition';

import './different_user_input';

declare module 'blockly-test/core/interfaces/i_json_block_definition' {
  interface JsonBlockCustomArgMap {
    field_mitosis: {
      type: 'field_mitosis';
      name?: string;
      cellId: string;
    };
  }
}

const mitosisBlockDefinition: JsonBlockDefinition = {
  type: 'mitosis_block',
  message0: 'split cell %1',
  args0: [
    {
      type: 'field_mitosis',
      name: 'CELL',
      cellId: 'cell-A',
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

defineBlocksWithJsonArray([mitosisBlockDefinition]);

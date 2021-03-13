import React from "react";
import BasePreprocessingNode from "components/DiagramNodes/Preprocessing/BasePreprocessingNode.js";
import { NODE_CLASS } from './common';

const properties = {
    name: 'Split',
    class: NODE_CLASS,
    description: 'Split.',
    output_policy: 'override',
    attributes: {
      'data_column_name': 'content',
      'output_column_name': 'split',
      'pattern': '',
      'limit': -1,
      'explode_split': 'false'
    },
};

export interface NodeProps {
  draggable: Boolean
}

export const SplitNode = ({ draggable=true } : NodeProps) => {
  return (
    <BasePreprocessingNode properties={properties} draggable={draggable}></BasePreprocessingNode>
    )
}


export default SplitNode;

import React from "react";
import BasePreprocessingNode from "components/DiagramNodes/Preprocessing/BasePreprocessingNode.js";
import { NODE_CLASS } from './common';

const properties = {
    name: 'ReplaceString',
    class: NODE_CLASS,
    description: 'ReplaceString.',
    output_policy: 'override',
    attributes: {
      'data_column_name': 'content',
      'output_column_name': 'replaced',
      'pattern': 'pattern',
      'replacement': 'new pattern'
    },
};

export interface NodeProps {
  draggable: Boolean
}

export const ReplaceStringNode = ({ draggable=true } : NodeProps) => {
  return (
    <BasePreprocessingNode properties={properties} draggable={draggable}></BasePreprocessingNode>
    )
}


export default ReplaceStringNode;

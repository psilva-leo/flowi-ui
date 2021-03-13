import React from "react";
import BasePreprocessingNode from "components/DiagramNodes/Preprocessing/BasePreprocessingNode.js";
import { NODE_CLASS } from './common';

const properties = {
    name: 'Substring',
    class: NODE_CLASS,
    description: 'Substring.',
    output_policy: 'override',
    attributes: {
      'data_column_name': 'content',
      'output_column_name': 'substring',
      'delimiter': '/',
      'count': 1
    },
};

export interface NodeProps {
  draggable: Boolean
}

export const SubstringNode = ({ draggable=true } : NodeProps) => {
  return (
    <BasePreprocessingNode properties={properties} draggable={draggable}></BasePreprocessingNode>
    )
}


export default SubstringNode;

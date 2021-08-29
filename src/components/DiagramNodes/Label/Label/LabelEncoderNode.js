import React from "react";
import BaseLabelNode from "components/DiagramNodes/Label/BaseLabelNode";
import { NODE_CLASS } from './common';

const properties = {
    name: 'LabelEncoder',
    class: NODE_CLASS,
    description: 'Encode labels to numeric value.',
    attributes: {
      'target_column': ''
    },
};

export interface NodeProps {
  draggable: Boolean
}

export const LabelEncoderNode = ({ draggable=true } : NodeProps) => {
  return (
    <BaseLabelNode properties={properties} draggable={draggable}></BaseLabelNode>
    )
}


export default LabelEncoderNode;

import React from "react";
import BasePreprocessingNode from "components/DiagramNodes/Preprocessing/BasePreprocessingNode";
import { NODE_CLASS } from './common';

const properties = {
    name: 'StandardScaler',
    class: NODE_CLASS,
    description: 'Standardize features by removing the mean and scaling to unit variance.',
    attributes: {
      'columns': '',
      'exclude_columns': '',
      'with_mean': 'true',
      'with_std': 'false'
    },
};

export interface NodeProps {
  draggable: Boolean
}

export const StandardScalerNode = ({ draggable=true } : NodeProps) => {
  return (
    <BasePreprocessingNode properties={properties} draggable={draggable}></BasePreprocessingNode>
    )
}


export default StandardScalerNode;

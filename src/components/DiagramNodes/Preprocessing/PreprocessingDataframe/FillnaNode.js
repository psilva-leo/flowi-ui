import React from "react";
import BasePreprocessingNode from "components/DiagramNodes/Preprocessing/BasePreprocessingNode";
import { NODE_CLASS } from './common';

const properties = {
    name: 'Fillna',
    class: NODE_CLASS,
    description: 'Fill NA/NaN values using the specified method. If both columns and exclude columns are empty, transformation is applied for all columns.',
    attributes: {
      'columns': '',
      'exclude_columns': '',
      'missing_values': 'nan',
      'strategy': 'constant',
      'fill_value': '0'
    },
};

export interface NodeProps {
  draggable: Boolean
}

export const FillnaNode = ({ draggable=true } : NodeProps) => {
  return (
    <BasePreprocessingNode properties={properties} draggable={draggable}></BasePreprocessingNode>
    )
}


export default FillnaNode;

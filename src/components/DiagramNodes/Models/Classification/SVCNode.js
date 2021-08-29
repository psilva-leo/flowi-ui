import React from "react";
import BaseModelsNode from "components/DiagramNodes/Models/BaseModelsNode";
import { NODE_CLASS } from './common';

const properties = {
    name: 'SVC',
    class: NODE_CLASS,
    description: 'C-Support Vector Classification.',
    attributes: {
      'target_column': 'label',
      'C': 1.0,
      'kernel': 'rbf',
      'degree': 3,
      'gamma': 'scale',
      'coef0': 0.0,
      'shrinking': 'true',
      'probability': 'false',
      'tol': 0.001,
      'cache_size': 200,
      'class_weight': 'none',
      'max_iter': -1,
      'decision_function_shape': 'ovr',
      'break_ties': 'false'
    },
};

export interface NodeProps {
  draggable: Boolean
}

export const SVCNode = ({ draggable=true } : NodeProps) => {
  return (
    <BaseModelsNode properties={properties} draggable={draggable}></BaseModelsNode>
    )
}


export default SVCNode;

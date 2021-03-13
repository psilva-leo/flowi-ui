import React from "react";
import BaseTrainingNode from "components/DiagramNodes/Training/BaseTrainingNode";
import { NODE_CLASS } from './common';

const properties = {
    name: 'DecisionTree',
    class: NODE_CLASS,
    description: 'Train a decision tree classifier.',
    output_policy: 'create',
    attributes: {
      'directory_paths': ['train/'],
      'file_type': 'binaryFile',
    },
};

export interface NodeProps {
  draggable: Boolean
}

export const DecisionTreeNode = ({ draggable=true } : NodeProps) => {
  return (
    <BaseTrainingNode properties={properties} draggable={draggable}></BaseTrainingNode>
    )
}


export default DecisionTreeNode;

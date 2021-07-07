import React from "react";
import BaseLoadNode from "components/DiagramNodes/Load/BaseLoadNode";
import { NODE_CLASS } from './common';

const properties = {
    name: 'LoadFromDirectory',
    class: NODE_CLASS,
    description: 'Loads data from path and creates a dataframe.',
    output_policy: 'create',
    attributes: {
      'train_path': 'train/',
      'test_path': 'test/',
      'file_type': 'csv',
      'test_split': 0.2
    },
};

export interface NodeProps {
  draggable: Boolean
}

export const LoadFromDirectoryNode = ({ draggable=true } : NodeProps) => {
  return (
    <BaseLoadNode properties={properties} draggable={draggable}></BaseLoadNode>
    )
}


export default LoadFromDirectoryNode;

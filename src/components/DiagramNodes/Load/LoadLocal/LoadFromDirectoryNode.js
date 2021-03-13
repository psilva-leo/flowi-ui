import React from "react";
import BaseLoadNode from "components/DiagramNodes/Load/BaseLoadNode";
import { NODE_CLASS } from './common';

const properties = {
    name: 'LoadFromDirectory',
    class: NODE_CLASS,
    description: 'Loads data from path and creates a dataframe. For binary files (image and audio), dataframe consists of path, modificationTime, length, content and filename columns.',
    output_policy: 'create',
    attributes: {
      'directory_paths': ['train/'],
      'file_type': 'binaryFile',
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

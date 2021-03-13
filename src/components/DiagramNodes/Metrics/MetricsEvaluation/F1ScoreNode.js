import React from "react";
import BaseMetricsNode from "components/DiagramNodes/Metrics/BaseMetricsNode";
import { NODE_CLASS } from './common';

const properties = {
    name: 'F1Score',
    class: NODE_CLASS,
    description: 'Compute f1 score.',
    output_policy: 'create',
    attributes: {
      'directory_paths': ['train/'],
      'file_type': 'binaryFile',
    },
};

export interface NodeProps {
  draggable: Boolean
}

export const F1ScoreNode = ({ draggable=true } : NodeProps) => {
  return (
    <BaseMetricsNode properties={properties} draggable={draggable}></BaseMetricsNode>
    )
}


export default F1ScoreNode;

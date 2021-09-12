import React from "react";
import BaseMetricsNode from "components/DiagramNodes/Metrics/BaseMetricsNode";
import { NODE_CLASS } from './common';

const properties = {
    name: 'Accuracy',
    class: NODE_CLASS,
    description: 'Compute accuracy score.',
    attributes: {
      'target_column': 'class',
      'normalize': 'true'
    },
};

export interface NodeProps {
  draggable: Boolean
}

export const AccuracyNode = ({ draggable=true } : NodeProps) => {
  return (
    <BaseMetricsNode properties={properties} draggable={draggable}></BaseMetricsNode>
    )
}


export default AccuracyNode;

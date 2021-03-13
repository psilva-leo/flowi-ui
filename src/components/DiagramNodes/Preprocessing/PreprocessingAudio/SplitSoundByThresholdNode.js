import React from "react";
import BasePreprocessingNode from "components/DiagramNodes/Preprocessing/BasePreprocessingNode.js";
import { NODE_CLASS } from './common';

const properties = {
    name: 'SplitSoundByThreshold',
    class: NODE_CLASS,
    description: 'Split sound by threshold.',
    output_policy: 'override',
    attributes: {
      'data_column_name': 'mel',
      'output_column_name': 'signal',
      'label_column': '',
      'threshold': [-170],
      'min_window': [10]
    },
};

export interface NodeProps {
  draggable: Boolean
}

export const SplitSoundByThresholdNode = ({ draggable=true } : NodeProps) => {
  return (
    <BasePreprocessingNode properties={properties} draggable={draggable}></BasePreprocessingNode>
    )
}


export default SplitSoundByThresholdNode;

import React from "react";
import BasePreprocessingNode from "components/DiagramNodes/Preprocessing/BasePreprocessingNode.js";
import { NODE_CLASS } from './common';

const properties = {
    name: 'MelSpectrogram',
    class: NODE_CLASS,
    description: 'Compute a mel-scaled spectrogram.',
    output_policy: 'override',
    attributes: {
      'data_column_name': 'content',
      'output_column_name': 'mel',
      'n_mels': [20],
      'fmax': [8000],
      'dct_type': [2],
      'returning_mels': [0],
      'merge_policy': 'none'
    },
};

export interface NodeProps {
  draggable: Boolean
}

export const MelSpectrogramNode = ({ draggable=true } : NodeProps) => {
  return (
    <BasePreprocessingNode properties={properties} draggable={draggable}></BasePreprocessingNode>
    )
}


export default MelSpectrogramNode;

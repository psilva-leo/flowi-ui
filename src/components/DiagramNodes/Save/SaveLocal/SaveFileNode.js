import React from "react";
import BaseSaveNode from "components/DiagramNodes/Save/BaseSaveNode";
import { NODE_CLASS } from './common';

const properties = {
    name: 'SaveFile',
    class: NODE_CLASS,
    description: 'Saves data to a file.',
    attributes: {
      'label_column': 'label',
      'save_label_column_only': 'false',
      'file_name': 'temp',
      'file_type': 'csv'
    },
};

export interface NodeProps {
  draggable: Boolean
}

export const SaveFileNode = ({ draggable=true } : NodeProps) => {
  return (
    <BaseSaveNode properties={properties} draggable={draggable}></BaseSaveNode>
    )
}


export default SaveFileNode;

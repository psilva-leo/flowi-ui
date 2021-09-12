import React from "react";
import DiagramNode from "components/DiagramNodes/DiagramNode.js";

const major_type = "Label";
const ports = {
  port1: {
    id: 'port1',
    type: 'left',
  },
  port2: {
    id: 'port2',
    type: 'right',
  },
};

const iconClass = 'ni ni-archive-2';


export interface LabelNodeProps {
  properties?: any,
  draggable: Boolean
}

export const BaseLabelNode = ({ properties, draggable=true } : LabelNodeProps) => {
  return (
    <DiagramNode type={major_type} ports={ports} properties={properties} IconClass={iconClass} draggable={draggable}></DiagramNode>
    )
}


export default BaseLabelNode;

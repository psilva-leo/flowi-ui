import React from "react";
import DiagramNode from "components/DiagramNodes/DiagramNode.js";

const major_type = "Save";
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


export interface SaveNodeProps {
  properties?: any,
  draggable: Boolean
}

export const BaseSaveNode = ({ properties, draggable=true } : SaveNodeProps) => {
  return (
    <DiagramNode type={major_type} ports={ports} properties={properties} IconClass={iconClass} draggable={draggable}></DiagramNode>
    )
}


export default BaseSaveNode;

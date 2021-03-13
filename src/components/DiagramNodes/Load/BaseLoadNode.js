import React from "react";
import DiagramNode from "components/DiagramNodes/DiagramNode.js";

const major_type = "Load";
const ports = {
  port1: {
    id: 'port1',
    type: 'right',
  },
};

const iconClass = 'ni ni-archive-2';


export interface LoadNodeProps {
  properties?: any,
  draggable: Boolean
}

export const BaseLoadNode = ({ properties, draggable=true } : LoadNodeProps) => {
  return (
    <DiagramNode type={major_type} ports={ports} properties={properties} IconClass={iconClass} draggable={draggable}></DiagramNode>
    )
}


export default BaseLoadNode;

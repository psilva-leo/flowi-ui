import React from "react";
import DiagramNode from "components/DiagramNodes/DiagramNode.js";

const major_type = "Training";
const ports = {
  port1: {
    id: 'port1',
    type: 'right',
  },
};

const iconClass = 'ni ni-atom';


export interface NodeProps {
  properties?: any,
  draggable: Boolean
}

export const BaseTrainingNode = ({ properties, draggable=true } : NodeProps) => {
  return (
    <DiagramNode type={major_type} ports={ports} properties={properties} IconClass={iconClass} draggable={draggable}></DiagramNode>
    )
}


export default BaseTrainingNode;

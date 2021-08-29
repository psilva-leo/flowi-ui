import React from "react";
import DiagramNode from "components/DiagramNodes/DiagramNode.js";

const major_type = "Models";
const ports = {
  port1: {
    id: 'port1',
    type: 'right',
  },
};

const iconClass = 'ni ni-archive-2';


export interface ModelsNodeProps {
  properties?: any,
  draggable: Boolean
}

export const BaseModelsNode = ({ properties, draggable=true } : ModelsNodeProps) => {
  return (
    <DiagramNode type={major_type} ports={ports} properties={properties} IconClass={iconClass} draggable={draggable}></DiagramNode>
    )
}


export default BaseModelsNode;

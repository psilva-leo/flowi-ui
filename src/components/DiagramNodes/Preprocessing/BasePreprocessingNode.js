import React from "react";
import DiagramNode from "components/DiagramNodes/DiagramNode.js";

const major_type = "Preprocessing";
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

const iconClass = 'ni ni-tie-bow';


export interface ProprocessingNodeProps {
  properties?: any,
  draggable: Boolean
}

export const PreprocessingNode = ({ properties, draggable=true } : ProprocessingNodeProps) => {
  return (
    <DiagramNode type={major_type} ports={ports} properties={properties} IconClass={iconClass} draggable={draggable}></DiagramNode>
    )
}


export default PreprocessingNode;

import React from "react";
import DiagramNode from "components/DiagramNodes/DiagramNode.js";

const major_type = "Metrics";
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

const iconClass = 'ni ni-chart-bar-32';


export interface NodeProps {
  properties?: any,
  draggable: Boolean
}

export const BaseMetricsNode = ({ properties, draggable=true } : NodeProps) => {
  return (
    <DiagramNode type={major_type} ports={ports} properties={properties} IconClass={iconClass} draggable={draggable}></DiagramNode>
    )
}


export default BaseMetricsNode;

import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Row } from "reactstrap";
import { REACT_FLOW_CHART } from "@mrblenny/react-flow-chart";


export interface ISidebarItemProps {
  type: string,
  ports: INode.ports,
  properties?: any,
  IconClass: string,
  draggable: Boolean
}

export const DiagramNode = ({ type, ports, properties, IconClass, draggable=true }: ISidebarItemProps) => {
  return (
    <>
    <Card className="card-stats mb-4 mb-xl-0" style={{cursor: 'move'}}
      draggable={draggable}
      onDragStart={ (event) => {
        if (draggable){
          event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
        }
      } }
      >
        <CardBody>
          <Row>
          <div className="float-left">
              <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                <i className={IconClass} />
              </div>
            </div>
            <div className="col">
              <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                {properties.class.replace(/([a-z0-9])([A-Z])/g, '$1 $2')}
              </CardTitle>
              <span className="h2 font-weight-bold mb-0">{properties.name}</span>
            </div>
          </Row>
        </CardBody>
    </Card>
    </>
  )
}


export default DiagramNode;

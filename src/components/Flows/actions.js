import { v4 } from 'uuid'
import {
  IChart, identity, IOnCanvasClick,
  IOnCanvasDrop, IOnDeleteKey, IOnDragCanvas, IOnDragCanvasStop,
  IOnDragNode, IOnDragNodeStop, IOnLinkCancel, IOnLinkComplete, IOnLinkMouseEnter, IOnLinkMouseLeave, IOnLinkMove,
  IOnLinkStart, IOnNodeClick, IOnNodeMouseEnter,
  IOnNodeMouseLeave, IOnNodeSizeChange, IOnPortPositionChange, IStateCallback,
} from '@mrblenny/react-flow-chart'
import { rotate } from '@mrblenny/react-flow-chart/src/container/utils/rotate'


export const onDragNode: IStateCallback<IOnDragNode> = ({ config, event, data, id }) => (chart: IChart) => {
  const nodechart = chart.nodes[id]

  if (nodechart) {
    chart.nodes[id] = {
      ...nodechart,
      position: config && config.snapToGrid ? { x: Math.round(data.x / 20) * 20, y: Math.round(data.y / 20) * 20 } : { x: data.x, y: data.y },
    }
  }

  return chart
}

export const onDragNodeStop: IStateCallback<IOnDragNodeStop> = () => identity

export const onDragCanvas: IStateCallback<IOnDragCanvas> = ({ config, event, data }) => (chart: IChart): IChart => {
  chart.offset = config && config.snapToGrid ? { x: Math.round(data.x / 20) * 20, y: Math.round(data.y / 20) * 20 } : { x: data.x, y: data.y }
  
  return chart
}

export const onDragCanvasStop: IStateCallback<IOnDragCanvasStop> = () => identity

export const onLinkStart: IStateCallback<IOnLinkStart> = ({ linkId, fromNodeId, fromPortId }) => (chart: IChart): IChart => {
  chart.links[linkId] = {
    id: linkId,
    from: {
      nodeId: fromNodeId,
      portId: fromPortId,
    },
    to: {},
  }
  
  return chart
}

export const onLinkMove: IStateCallback<IOnLinkMove> = ({ linkId, toPosition }) => (chart: IChart): IChart => {
  const link = chart.links[linkId]
  link.to.position = toPosition
  chart.links[linkId] = { ...link }

  return chart
}

export const onLinkComplete: IStateCallback<IOnLinkComplete> = (props) => {
  const { linkId, fromNodeId, fromPortId, toNodeId, toPortId, config = {} } = props
  return (chart: IChart): IChart => {
    if (!config.readonly && (config.validateLink ? config.validateLink({ ...props, chart }) : true) && [fromNodeId, fromPortId].join() !== [toNodeId, toPortId].join()) {
      chart.links[linkId].to = {
        nodeId: toNodeId,
        portId: toPortId,
      }
    } else {
      delete chart.links[linkId]
    }
    
    return chart
  }
}

export const onLinkCancel: IStateCallback<IOnLinkCancel> = ({ linkId }) => (chart: IChart) => {
  delete chart.links[linkId]

  return chart
}

export const onLinkMouseEnter: IStateCallback<IOnLinkMouseEnter> = ({ linkId }) => (chart: IChart) => {
  // Set the link to hover
  const link = chart.links[linkId]
  // Set the connected ports to hover
  if (link.to.nodeId && link.to.portId) {
    if (chart.hovered.type !== 'link' || chart.hovered.id !== linkId) {
      chart.hovered = {
        type: 'link',
        id: linkId,
      }
    }
  }

  return chart
}

export const onLinkMouseLeave: IStateCallback<IOnLinkMouseLeave> = ({ linkId }) => (chart: IChart) => {
  const link = chart.links[linkId]
  // Set the connected ports to hover
  if (link.to.nodeId && link.to.portId) {
    chart.hovered = {}
  }

  return chart
}

export const onLinkClick: IStateCallback<IOnLinkMouseLeave> = ({ linkId }) => (chart: IChart) => {
  if (chart.selected.id !== linkId || chart.selected.type !== 'link') {
    chart.selected = {
      type: 'link',
      id: linkId,
    }
  }

  return chart
}

export const onCanvasClick: IStateCallback<IOnCanvasClick> = () => (chart: IChart) => {
  if (chart.selected.id) {
    chart.selected = {}
  }

  return chart
}

export const onNodeMouseEnter: IStateCallback<IOnNodeMouseEnter> = ({ nodeId }) => (chart: IChart) => {
  return {
    ...chart,
    hovered: {
      type: 'node',
      id: nodeId,
    },
  }
}

export const onNodeMouseLeave: IStateCallback<IOnNodeMouseLeave> = ({ nodeId }) => (chart: IChart) => {
  if (chart.hovered.type === 'node' && chart.hovered.id === nodeId) {
    return { ...chart, hovered: {} }
  }

  return chart
}

export const onDeleteKey: IStateCallback<IOnDeleteKey> = () => (chart: IChart) => {
  if (chart.selected.type === 'node' && chart.selected.id) {
    const node = chart.nodes[chart.selected.id]
    // Delete the connected links
    Object.keys(chart.links).forEach((linkId) => {
      const link = chart.links[linkId]
      if (link.from.nodeId === node.id || link.to.nodeId === node.id) {
        delete chart.links[link.id]
      }
    })
    // Delete the node
    delete chart.nodes[chart.selected.id]
  } else if (chart.selected.type === 'link' && chart.selected.id) {
    delete chart.links[chart.selected.id]
  }
  if (chart.selected) {
    chart.selected = {}
  }

  return chart
}

export const onNodeClick: IStateCallback<IOnNodeClick> = ({ nodeId }, self) => (chart: IChart) => {
  if (chart.selected.id !== nodeId || chart.selected.type !== 'node') {
    chart.selected = {
      type: 'node',
      id: nodeId,
    }
  }
  self.triggerComponentModal();

  return chart
}

export const onNodeSizeChange: IStateCallback<IOnNodeSizeChange> = ({ nodeId, size }) => (chart: IChart) => {
  chart.nodes[nodeId] = {
    ...chart.nodes[nodeId],
    size,
  }

  return chart
}

export const onPortPositionChange: IStateCallback<IOnPortPositionChange> = ({ node: nodeToUpdate, port, el, nodesEl }) =>
  (chart: IChart): IChart => {
    if (nodeToUpdate.size) {
      // rotate the port's position based on the node's orientation prop (angle)
      const center = { x: nodeToUpdate.size.width / 2, y: nodeToUpdate.size.height / 2 }
      const current = { x: el.offsetLeft + nodesEl.offsetLeft + el.offsetWidth / 2, y: el.offsetTop + nodesEl.offsetTop + el.offsetHeight / 2 }
      const angle = nodeToUpdate.orientation || 0
      const position = rotate(center, current, angle)

      const node = chart.nodes[nodeToUpdate.id]
      node.ports[port.id].position = {
        x: position.x,
        y: position.y,
      }

      chart.nodes[nodeToUpdate.id] = { ...node }
    }

    return chart
  }


  
export const onCanvasDrop: IStateCallback<IOnCanvasDrop> = ({config, data, position }) => {
  return (chart: IChart): IChart => {
    const id = v4()
  chart.nodes[id] = {
    id,
    position: config && config.snapToGrid ? { x: Math.round(position.x / 20) * 20, y: Math.round(position.y / 20) * 20 } : { x: position.x, y: position.y },
    orientation: data.orientation || 0,
    type: data.type,
    ports: data.ports,
    properties: data.properties,
  }

  return chart
}
}

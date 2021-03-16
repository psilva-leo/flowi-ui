import {
    UPDATE_TRAINING_CHART,
    UPDATE_TRAINING_NODE,
  } from 'store/actions/trainingFlowChart'
  
  
const initialChart = {
    offset: {
      x: 0,
      y: 0,
    },
    nodes: {},
    links: {},
    selected: {},
    hovered: {},
};
  
function trainingFlowChart(state = initialChart, action) {
    switch (action.type) {
        case UPDATE_TRAINING_CHART:
            return Object.assign({}, action.chart);
        case UPDATE_TRAINING_NODE:      
            const newNode = action.node
            return {
                ...state,
                nodes: {
                ...state.nodes,
                [newNode.id]: newNode
                }
            };
        default:
            return state
    }
}

export default trainingFlowChart;
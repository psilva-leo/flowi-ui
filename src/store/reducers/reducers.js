import { combineReducers } from 'redux'
import {
  UPDATE_PREPROCESSING_CHART,
  UPDATE_PREPROCESSING_NODE,
} from 'store/actions/preprocessingFlowChart'


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

function chart(state = initialChart, action) {
  switch (action.type) {
    case UPDATE_PREPROCESSING_CHART:
      return Object.assign({}, action.chart);
    case UPDATE_PREPROCESSING_NODE:      
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

const todoApp = combineReducers({
  chart
})

export default todoApp
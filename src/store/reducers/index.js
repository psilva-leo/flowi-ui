import preprocessingFlowChartReducer from './preprocessingFlowChart';
import trainingFlowChartReducer from './trainingFlowChart';
import sharedVariablesReducer from './sharedVariables';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    preprocessingChart: preprocessingFlowChartReducer,
    trainingChart: trainingFlowChartReducer,
    sharedVariables: sharedVariablesReducer
});

export default allReducers;
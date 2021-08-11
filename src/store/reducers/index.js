import preprocessingFlowChartReducer from './preprocessingFlowChart';
import trainingFlowChartReducer from './trainingFlowChart';
import scheduleReducer from './schedule';
import deployReducer from './deploy';
import sharedVariablesReducer from './sharedVariables';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    preprocessingChart: preprocessingFlowChartReducer,
    trainingChart: trainingFlowChartReducer,
    schedule: scheduleReducer,
    deploy: deployReducer,
    sharedVariables: sharedVariablesReducer
});

export default allReducers;
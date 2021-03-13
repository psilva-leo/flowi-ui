import flowChartReducer from './flowChart';
import sharedVariablesReducer from './sharedVariables';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    chart: flowChartReducer,
    sharedVariables: sharedVariablesReducer
});

export default allReducers;
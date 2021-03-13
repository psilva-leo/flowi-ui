import {
    ADD_SHARED_VARIABLES,
    REMOVE_SHARED_VARIABLES
  } from 'store/actions/sharedVariables'
  

  
const sharedVariablesReducer = (state = [], action) => {
    switch(action.type){
        case ADD_SHARED_VARIABLES:
            return [...state, ...action.sharedVariablesToAdd];
        case REMOVE_SHARED_VARIABLES:
            return state.filter(element => action.sharedVariablesToRemove.indexOf(element) === -1);
        default:
            return state;
    }
}

export default sharedVariablesReducer;
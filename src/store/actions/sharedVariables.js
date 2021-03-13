/*
 * action types
 */

export const ADD_SHARED_VARIABLES = 'ADD_SHARED_VARIABLES'
export const REMOVE_SHARED_VARIABLES = 'REMOVE_SHARED_VARIABLES'


/*
 * action creators
 */

export function addSharedVariables(sharedVariablesToAdd) {
  return { type: ADD_SHARED_VARIABLES, sharedVariablesToAdd }
}

export function removeSharedVariables(sharedVariablesToRemove) {
  return { type: REMOVE_SHARED_VARIABLES, sharedVariablesToRemove }
}

/*
 * action types
 */

export const UPDATE_TRAINING_CHART = 'UPDATE_TRAINING_CHART'
export const UPDATE_TRAINING_NODE = 'UPDATE_TRAINING_NODE'


/*
 * action creators
 */

export function updateTrainingChart(chart) {
  return { type: UPDATE_TRAINING_CHART, chart }
}

export function updateTrainingNode(node) {
  return { type: UPDATE_TRAINING_NODE, node }
}

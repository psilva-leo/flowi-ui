/*
 * action types
 */

export const UPDATE_CHART = 'UPDATE_PREPROCESSING_CHART'
export const UPDATE_NODE = 'UPDATE_PREPROCESSING_NODE'


/*
 * action creators
 */

export function updatePreprocessingChart(chart) {
  return { type: UPDATE_CHART, chart }
}

export function updatePreprocessingNode(node) {
  return { type: UPDATE_NODE, node }
}

/*
 * action types
 */

export const UPDATE_CHART = 'UPDATE_CHART'
export const UPDATE_NODE = 'UPDATE_NODE'


/*
 * action creators
 */

export function updateChart(chart) {
  return { type: UPDATE_CHART, chart }
}

export function updateNode(node) {
  return { type: UPDATE_NODE, node }
}

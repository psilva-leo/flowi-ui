/*
 * action types
 */

export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE'


/*
 * action creators
 */

export function updateSchedule(schedule) {
  return { type: UPDATE_SCHEDULE, schedule }
}

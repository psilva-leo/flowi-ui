/*
 * action types
 */

export const UPDATE_DEPLOY = 'UPDATE_DEPLOY'


/*
 * action creators
 */

export function updateDeploy(deploy) {
  return { type: UPDATE_DEPLOY, deploy }
}

import { UPDATE_SCHEDULE } from 'store/actions/schedule'
  
  
const initialSchedule = {
    "schedule_interval": "None",
    "experiment_tracking": "MLflow"
};
  
function schedule(state = initialSchedule, action) {
    switch (action.type) {
        case UPDATE_SCHEDULE:
            return Object.assign({}, action.schedule);
        default:
            return state
    }
}

export default schedule;

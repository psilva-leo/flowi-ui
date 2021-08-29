import { UPDATE_DEPLOY } from 'store/actions/deploy'
  
  
const initialDeploy = {
    "api": {"enabled": false},
    "batch": {
        "enabled": false,
        "schedule_interval": "None",
        "source": null,
        "destiny": null
    }
};

function deploy(state = initialDeploy, action) {
    switch (action.type) {
        case UPDATE_DEPLOY:
            return Object.assign({}, action.deploy);
        default:
            return state
    }
}

export default deploy;

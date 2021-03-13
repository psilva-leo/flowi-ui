const selectedFlowComponentReducer = (state = null, action) => {
    switch(action.type){
        case 'changeSelectedFlowComponent':
            return action.payload;
        default:
            return state;
    }
}

export default selectedFlowComponentReducer;
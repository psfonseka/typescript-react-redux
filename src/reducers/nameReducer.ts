interface NameAction {
    type: string;
    payload: string;
}

const nameReducer = (state = {name: "User"}, action: NameAction) => {
    switch(action.type) {
        case "CHANGE_NAME":
            return Object.assign({}, state, {name: action.payload});
        default:
            return state;
    }
};

export default nameReducer;
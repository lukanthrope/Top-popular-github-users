let defaultState = {
    users: []
};

const reducer = (state=defaultState, action) => {
    if (action.type === "LOAD") {
        return {
            ...state,
            users: action.items
        }
    }

    return {
        ...state
    }
}

export default reducer;
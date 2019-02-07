let defaultState = {
    users: [],
    error: false,
    city: ''
};

const reducer = (state=defaultState, action) => {
    if (action.type === "LOAD") {
        return {
            ...state,
            users: action.users
        }
    }
    
    if (action.type === "SUM_OF_STARS") {
        const users = state.users;
        const currentUser = users.find((user) => {
            return user.id === action.payload.userId
        });
        currentUser.starsCount = action.payload.sumOfStars || 0;
        const newUsers = users.map((user) => {
            if (user.id === currentUser.id) {
                return currentUser;
            }
            return user;
        });    

        return {
            ...state,
            users: newUsers
        }
    }

    if (action.type === "INPUT_CITY") {
        return {
            ...state,
            city: action.city
        }
    }

    if (action.type === "ERROR") {
        return {
            ...state,
            error: true
        }
    }

    return {
        ...state
    }
}

export default reducer;
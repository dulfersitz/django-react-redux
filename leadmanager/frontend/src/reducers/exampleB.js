const exBReducer = (state = false, action) => {
    switch (action.type) {
        case 'Toggle':
            return !state;
        default:
            return state;
    }
}

export default exBReducer;
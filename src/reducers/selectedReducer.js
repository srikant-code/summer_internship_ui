const initialState = {
    selected: [],
};

const selectedReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SELECTED_INVOICE":
            console.log(action.selected, "reducer")
            return {
                selected: [...action.selected],
            }
        default:
            return state;
    }
};
export default selectedReducer;
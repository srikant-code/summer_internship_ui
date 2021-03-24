const initialState = {
    searchTerm: "",
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_INVOICE":
            // console.log(action.searchTerm, "reducer")
            return {
                searchTerm: action.searchTerm,
            }
        default:
            return state;
    }
};
export default searchReducer;
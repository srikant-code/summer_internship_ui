const initialState = {
    editInvoiceAmount: 0,
    editNotes: "",
};

const editReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT_INVOICE":
            return {
                editInvoiceAmount: action.editInvoiceAmount,
                editNotes: action.editNotes,
            }
        default:
            return state;
    }
};
export default editReducer;
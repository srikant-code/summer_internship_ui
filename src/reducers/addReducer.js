const initialState = {
    customerName: "",
    customerNumber: "",
    invoiceNumber: "",
    invoiceAmount: 0,
    dueDate: "",
    notes: "",
    valid: false,
    reset: false,
};

const isNotEmpty = value => {
    return value !== ""
}

const addReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_INVOICE":
            return {
                customerName: action.customerName,
                customerNumber: action.customerNumber,
                invoiceNumber: action.invoiceNumber,
                invoiceAmount: action.invoiceAmount,
                dueDate: action.dueDate,
                notes: action.notes,
                valid: isNotEmpty(action.customerName) &&
                    isNotEmpty(action.customerNumber) &&
                    isNotEmpty(action.invoiceNumber) &&
                    action.invoiceAmount !== 0 &&
                    isNotEmpty(action.dueDate),
            }
        case "RESET_ADD_INVOICE": return {
            ...state,
            reset: action.reset
        }

        default:
            return state;
    }
};
export default addReducer;
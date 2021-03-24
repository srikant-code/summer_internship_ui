export const addInvoice = (customerName, customerNumber, invoiceNumber, invoiceAmount, dueDate, notes) => ({
    type: "ADD_INVOICE",
    customerName,
    customerNumber,
    invoiceNumber,
    invoiceAmount,
    dueDate,
    notes
})
export const resetAddInvoice = (reset) => ({
    type: "RESET_ADD_INVOICE",
    reset,
})
export const selectInvoice = (selected) => ({
    type: "SELECTED_INVOICE",
    selected,
})
export const searchInvoice = (searchTerm) => ({
    type: "SEARCH_INVOICE",
    searchTerm,
})
export const editInvoice = (editInvoiceAmount, editNotes) => ({
    type: "EDIT_INVOICE",
    editInvoiceAmount,
    editNotes
})

import React from 'react'
import {
    Paper,
    makeStyles,
} from '@material-ui/core';
import Modal from '../templates/Modal';
import InputFields from '../templates/InputFields';
import { pxToVw } from '../../utils/theme';
import { addInvoice } from "../../actions/Actions";
import { useSelector, useDispatch } from 'react-redux';
// import TextField from '@material-ui/core/TextField';
// import allReducers from "../../reducers/Reducer";

const useStyles = makeStyles((theme) => ({
    formControl: {
        backgroundColor: theme.palette.colors.color_273D49CC,
        color: theme.palette.colors.color_97A1A9,
        height: "fit-content",
        minWidth: "fit-content",
        display: "flex",
        flex: "1 0 1",
    },
}))

export const AddModal = () => {
    const classes = useStyles()
    let [customerNameLocal, setCustomerName] = React.useState("")
    let [customerNumberLocal, setCustomerNumber] = React.useState("")
    let [invoiceNumberLocal, setInvoiceNumber] = React.useState("")
    let [invoiceAmountLocal, setInvoiceAmount] = React.useState(0)
    let [dueDateLocal, setDueDate] = React.useState("")
    let [notesLocal, setNotes] = React.useState("")
    // let [validLocal, setValid] = React.useState(false)

    const dispatch = useDispatch()

    const empty = ""
    const {
        // customerName,
        // customerNumber,
        // invoiceNumber,
        // invoiceAmount,
        // dueDate,
        // notes,
        valid,
    } = useSelector(state => state.add);
    // const reset = useSelector(state => state.add.reset);
    const selected = useSelector(state => state.selected.selected)

    const handleChange = (event) => {
        const ID = event.target.id
        const value = event.target.value

        if (ID === "addCustomerName")
            setCustomerName(value)
        else if (ID === "addCustomerNumber")
            setCustomerNumber(value)
        else if (ID === "addInvoiceNumber")
            setInvoiceNumber(value)
        else if (ID === "addInvoiceAmount")
            setInvoiceAmount(parseFloat(value) === null || isNaN(parseFloat(value)) ? 0 : parseFloat(value))
        else if (ID === "addDueDate")
            setDueDate(value)
        else if (ID === "addNotes")
            setNotes(value)

        dispatch(addInvoice(customerNameLocal,
            customerNumberLocal,
            invoiceNumberLocal,
            invoiceAmountLocal,
            dueDateLocal,
            notesLocal,
            valid))

    };

    const resetfields = () => {
        setCustomerName("")
        setCustomerNumber("")
        setInvoiceNumber("")
        setInvoiceAmount(0)
        setDueDate("")
        setNotes("")
    }

    return (
        <Modal
            variant="outlined"
            buttontext="Add"
            startIcon="AddIcon"
            activeText={ selected.length === 0 ? true : false }
        >
            <Paper component="form"
                className={ classes.formControl }
                elevation={ 0 }>
                <div style={ { marginRight: pxToVw(50), width: "fit-content" } }>
                    <InputFields
                        placeholder="Ex: KRAFT Studios"
                        id="addCustomerName"
                        textLabel="Customer Name "
                        required={ true }
                        rows={ 1 }
                        value={ useSelector(state => state.add.reset) ? resetfields : customerNameLocal }
                        handler={ handleChange }
                        multiline={ false }
                        error={ customerNameLocal === empty ? true : false }
                        name="customer_name"
                    />
                    <InputFields
                        placeholder="Ex: 7160323"
                        id="addCustomerNumber"
                        textLabel="Customer No. "
                        required={ true }
                        rows={ 1 }
                        value={ useSelector(state => state.add.reset) ? resetfields : customerNumberLocal }
                        handler={ handleChange }
                        multiline={ false }
                        error={ customerNumberLocal === empty ? true : false }
                        name="customer_number"
                    />
                    <InputFields
                        placeholder="Ex: 231987347"
                        id="addInvoiceNumber"
                        textLabel="Invoice No. "
                        required={ true }
                        rows={ 1 }
                        value={ useSelector(state => state.add.reset) ? resetfields : invoiceNumberLocal }
                        handler={ handleChange }
                        multiline={ false }
                        error={ invoiceNumberLocal === empty ? true : false }
                        name="id"
                    />
                    <InputFields
                        placeholder="Ex: 0"
                        id="addInvoiceAmount"
                        textLabel="Invoice Amount "
                        required={ true }
                        rows={ 1 }
                        // value={ isNaN(parseFloat(invoiceAmountLocal)) ?
                        //     0 : isNaN(parseFloat(invoiceAmount))
                        //         ? parseFloat(invoiceAmount) === 0 || reset ? parseFloat(invoiceAmount) : parseFloat(invoiceAmountLocal) : 0 }
                        value={ useSelector(state => state.add.reset) ? resetfields : isNaN(parseFloat(invoiceAmountLocal)) ?
                            0 : parseFloat(invoiceAmountLocal) }
                        handler={ handleChange }
                        multiline={ false }
                        last={ true }
                        error={ invoiceAmountLocal === 0 ? true : false }
                        name="invoice_amount"
                    />
                </div>
                <div style={ { width: "fit-content" } }>
                    <InputFields
                        placeholder="Ex: 30-12-2020"
                        id="addDueDate"
                        textLabel="Due Date "
                        required={ true }
                        type="date"
                        rows={ 1 }
                        value={ useSelector(state => state.add.reset) ? resetfields : dueDateLocal }
                        handler={ handleChange }
                        multiline={ false }
                        error={ dueDateLocal === empty ? true : false }
                        name="due_date"
                    />
                    <InputFields
                        placeholder="Add Notes"
                        id="addNotes"
                        textLabel="Notes "
                        required={ false }
                        rows={ 7 }
                        value={ useSelector(state => state.add.reset) ? resetfields : notesLocal }
                        handler={ handleChange }
                        multiline={ true }
                        last={ true }
                        name="notes"
                    />
                </div>
            </Paper>
        </Modal>
    )
}


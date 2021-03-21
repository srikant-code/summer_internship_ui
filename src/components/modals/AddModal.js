import React from 'react'
import {
    Paper,
    makeStyles,
} from '@material-ui/core';
import Modal from '../templates/Modal';
import InputFields from '../templates/InputFields';
import { pxToVw } from '../../utils/theme';
import TextField from '@material-ui/core/TextField';

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
    const [customerName, setCustomerName] = React.useState("")
    const [customerNumber, setCustomerNumber] = React.useState("")
    const [invoiceNumber, setInvoiceNumber] = React.useState("")
    const [invoiceAmount, setInvoiceAmount] = React.useState("")
    const [dueDate, setDueDate] = React.useState("")
    const [notes, setNotes] = React.useState("")

    const empty = ""
    const [valid, setValid] = React.useState("")

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
            setInvoiceAmount(value)
        else if (ID === "addDueDate")
            setDueDate(value)
        else if (ID === "addNotes")
            setNotes(value)
    };

    return (
        <Modal
            variant="outlined"
            buttontext="Add"
            startIcon="AddIcon"
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
                        value={ customerName }
                        handler={ handleChange }
                        multiline={ false }
                        error={ customerName === empty ? true : false }
                    />
                    <InputFields
                        placeholder="Ex: 7160323"
                        id="addCustomerNumber"
                        textLabel="Customer No. "
                        required={ true }
                        rows={ 1 }
                        value={ customerNumber }
                        handler={ handleChange }
                        multiline={ false }
                        error={ customerNumber === empty ? true : false }
                    />
                    <InputFields
                        placeholder="Ex: 231987347"
                        id="addInvoiceNumber"
                        textLabel="Invoice No. "
                        required={ true }
                        rows={ 1 }
                        value={ invoiceNumber }
                        handler={ handleChange }
                        multiline={ false }
                        error={ invoiceNumber === empty ? true : false }
                    />
                    <InputFields
                        placeholder="Ex: 0"
                        id="addInvoiceAmount"
                        textLabel="Invoice Amount "
                        required={ true }
                        rows={ 1 }
                        value={ invoiceAmount }
                        handler={ handleChange }
                        multiline={ false }
                        last={ true }
                        error={ invoiceAmount === empty ? true : false }
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
                        value={ dueDate }
                        handler={ handleChange }
                        multiline={ false }
                        error={ dueDate === empty ? true : false }
                    />
                    <InputFields
                        placeholder="Add Notes"
                        id="addNotes"
                        textLabel="Notes "
                        required={ false }
                        rows={ 7 }
                        value={ notes }
                        handler={ handleChange }
                        multiline={ true }
                        last={ true }
                    />
                </div>
            </Paper>
        </Modal>
    )
}


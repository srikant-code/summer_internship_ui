import React from 'react'
import {
    Paper,
    makeStyles,
} from '@material-ui/core';
import Modal from '../templates/Modal';
import InputFields from '../templates/InputFields';
import { useSelector, useDispatch } from 'react-redux';
import { editInvoice } from "../../actions/Actions";
// import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    formControl: {
        backgroundColor: theme.palette.colors.color_273D49CC,
        color: theme.palette.colors.color_97A1A9,
        height: "fit-content",
        minWidth: "fit-content",
    },
}))

export const EditModal = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    let [invoiceAmount, setInvoiceAmount] = React.useState("")
    const [notes, setNotes] = React.useState("")
    const editinvamtstate = useSelector(state => state.edit.editInvoiceAmount)
    const selected = useSelector(state => state.selected.selected)

    const handleChange = (event) => {
        if (event.target.id === "invoiceAmount")
            setInvoiceAmount(event.target.value)
        else if (event.target.id === "notes")
            setNotes(event.target.value)
        dispatch(editInvoice(invoiceAmount, notes))
        if (editinvamtstate === "")
            setInvoiceAmount = editinvamtstate
    };

    return (
        <Modal
            variant="outlined"
            buttontext="Edit"
            startIcon="EditIcon"
            activeText={ selected.length === 1 ? true : false }
        >
            <Paper component="form"
                className={ classes.formControl }
                elevation={ 0 }>
                <InputFields
                    placeholder="Add Invoice Amount"
                    id="invoiceAmount"
                    textLabel="Invoice Amount "
                    required={ false }
                    rows={ 10 }
                    value={ invoiceAmount }
                    handler={ handleChange }
                    multiline={ false }
                    name="invoice_amount"
                />
                <InputFields
                    placeholder="Add Notes"
                    id="notes"
                    textLabel="Notes"
                    required={ false }
                    rows={ 7 }
                    value={ notes }
                    handler={ handleChange }
                    multiline={ true }
                    last={ true }
                    name="notes"
                />
                <input name="id" value="d" style={ { display: "none" } } />
            </Paper>
        </Modal>
    )
}


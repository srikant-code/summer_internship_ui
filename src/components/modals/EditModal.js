import React from 'react'
import {
    Paper,
    makeStyles,
} from '@material-ui/core';
import Modal from '../templates/Modal';
import InputFields from '../templates/InputFields';
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
    const [invoiceAmount, setInvoiceAmount] = React.useState("")
    const [notes, setNotes] = React.useState("")

    const handleChange = (event) => {
        if (event.target.id === "invoiceAmount")
            setInvoiceAmount(event.target.value)
        else if (event.target.id === "notes")
            setNotes(event.target.value)
    };

    return (
        <Modal
            variant="outlined"
            buttontext="Edit"
            startIcon="EditIcon"
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
                />
            </Paper>
        </Modal>
    )
}


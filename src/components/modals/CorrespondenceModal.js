import React from 'react'
import {
    makeStyles,
    Typography,
} from '@material-ui/core';
import Modal from '../templates/Modal';
import { pxToVh } from '../../utils/theme';


const useStyles = makeStyles((theme) => ({
    text: {
        color: theme.palette.colors.color_97A1A9,
        height: "fit-content",
        minWidth: "fit-content",
        fontSize: pxToVh(20),
        fontWeight: 500,
        fontFamily: theme.palette.font.ubuntu,
    },
    warning: {
        color: theme.palette.colors.color_FF5B5B_RED,
        fontWeight: 600,
    },
}))


const WhiteText = (props) => {
    const classes = useStyles()
    return (
        <span className={ classes.text } style={ { color: "white" } }>{ props.text }</span>
    )
}

export const CorrespondenceModal = () => {
    const classes = useStyles()
    return (
        <Modal
            variant="outlined"
            buttontext="View Correspondence"
        >
            <Typography className={ classes.text }>
                Subject: <WhiteText text="Invoice Details - {Account Name}" />
                <br /><br />
                Dear Sir/Madam,
                <br /><br />
                Gentle reminder that you have one or more open invoices on your account. <br />
                Please get back to us with an expected date of payment. If you have any specific issue with the invoice(s), please let us know so that we can address it at the earliest.
                <br /><br />
                Please find the details of the invoices below:
                <br />
                <br />
                <br /><br />


                In case you have already made a payment for the above items, please send us the details to ensure the payment is posted. <br />
                Let us know if we can be of any further assistance. Looking forward to hearing from you.
                <br /><br />
                Kind Regards, <br />
                <WhiteText text="[Sender’s First Name][Sender’s Last Name]" /> <br />
                Phone : <WhiteText text="[Sender’s contact number]" /> <br />
                Fax : <WhiteText text="[If any]" /> <br />
                Email : <WhiteText text="[Sender’s Email Address]" /> <br />
                <WhiteText text="Company Name[Sender’s Company Name]" /> <br />
                <br /><br />
            </Typography>

            <Typography className={ classes.text }>
                Subject: <WhiteText text="Invoice Details - {Account Name}" />
                <br /><br />
                Dear Sir/Madam,<br />
                Greetings!
                <br /><br />
                This is to remind you that there are one or more open invoices on your account. Please provide at your earliest convenience an update on the payment details or clarify the reason for the delay. If you have any specific issue with the invoice(s), please let us know so that we can address it to the correct Department.
                <br /><br />
                Please find the details of the invoices below:
                <br />
                <br />
                <br /><br />


                Total Amount to be Paid: <WhiteText text="$124.00K" />
                <br /><br />
                In case you have already made a payment for the above items, please send us the details to ensure the payment is posted. <br />
                Let us know if we can be of any further assistance. Looking forward to hearing from you.
                <br /><br />
                Kind Regards, <br />
                <WhiteText text="[Sender’s First Name][Sender’s Last Name]" /> <br />
                Phone : <WhiteText text="[Sender’s contact number]" /> <br />
                Fax : <WhiteText text="[If any]" /> <br />
                Email : <WhiteText text="[Sender’s Email Address]" /> <br />
                <WhiteText text="Company Name[Sender’s Company Name]" /> <br />
                <br /><br />
            </Typography>
        </Modal>
    )
}


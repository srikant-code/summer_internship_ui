import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CustomButton from './CustomButton';
import CustomSnackBar from './CustomSnackBar';
import { pxToVh } from '../../utils/theme';
import { useSelector, useDispatch } from 'react-redux';
import { editInvoice, addInvoice, resetAddInvoice } from "../../actions/Actions";
import axios from "axios";
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(3),
        fontSize: pxToVh(28),
        fontFamily: theme.palette.font.ubuntu,
        backgroundColor: "#2A3E4C",
        color: theme.palette.colors.color_FFFFFF_WHITE,
        borderRadius: `${pxToVh(10)} ${pxToVh(10)} ${pxToVh(0)} ${pxToVh(0)}`,
    },
    closeButton: {
        position: 'absolute',
        padding: theme.spacing(3),
        right: theme.spacing(1),
        top: theme.spacing(1),
        fontSize: pxToVh(28),
        fontFamily: theme.palette.font.ubuntu,
        color: theme.palette.colors.color_FFFFFF_WHITE,
    },
});

const useStyles = makeStyles((theme) => ({
    header: {
        fontSize: pxToVh(28),
        fontFamily: theme.palette.font.ubuntu,
    },
    content: {
        fontSize: pxToVh(20),
        fontFamily: theme.palette.font.ubuntu,
    }
}))

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    const style = useStyles()
    return (
        <MuiDialogTitle className={ classes.root } { ...other }>
            <Typography className={ style.header }>{ children }</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={ classes.closeButton } onClick={ onClose }>
                    <CloseIcon className={ style.header } />
                </IconButton>
            ) : null }
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        backgroundColor: "#2A3E4C",
        color: theme.palette.colors.color_FFFFFF_WHITE,
        borderTop: "1px solid #1A262F",
        borderBottom: "1px solid #1A262F",
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(3),
        backgroundColor: "#2A3E4C",
        color: theme.palette.colors.color_FFFFFF_WHITE,
        borderRadius: `${pxToVh(0)} ${pxToVh(0)} ${pxToVh(10)} ${pxToVh(10)}`,
    },
}))(MuiDialogActions);

const Modal = (props) => {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const clearAddInvoice = () => {
        dispatch(addInvoice("", "", "", 0, "", "", false))
        dispatch(resetAddInvoice(true))
    };
    const clearEditInvoice = () => {
        dispatch(editInvoice("", ""))
    };

    let [
        // responseData
        , setResponseData] = React.useState([]);
    // let [isNext, setIsNext] = React.useState(false);
    let [pageNumber, setPageNumber] = React.useState(0);
    const selec = useSelector(state => state.selected.selected[0])

    const isValid = useSelector(state => state.add.valid)
    const data = {
        id: useSelector(state => state.add.invoiceNumber),
        customer_name: useSelector(state => state.add.customerName),
        customer_number: useSelector(state => state.add.customerNumber),
        due_date: useSelector(state => state.add.dueDate),
        invoice_amount: useSelector(state => state.add.invoiceAmount),
        notes: useSelector(state => state.add.notes),
    }
    const FetchData = () => {
        console.log("inside fetchdata")
        setPageNumber(pageNumber + 1)
        let URL = ""
        if (props.buttontext === "Delete")
            URL = `http://localhost:8080/Summer_Internship_Backend/api/v1/invoice?delete&id=${selec}`;
        else if (props.buttontext === "Edit")
            URL = `http://localhost:8080/Summer_Internship_Backend/api/v1/invoice?edit&id=${selec}`;
        else {
            URL = `http://localhost:8080/Summer_Internship_Backend/api/v1/invoice?add&id=${data.id}customer_name=${data.customer_name}&customer_number=${data.customer_number}&due_date=${data.due_date}&invoice_amount=${data.invoice_amount}&notes=${data.notes}`;
            if (isValid) {
                axios
                    .get(URL)
                    .then((response) => {
                        setResponseData({ ...response.data });
                        console.log(response);
                        console.log("successfully added");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }

        axios
            .get(URL)
            .then((response) => {
                setResponseData({ ...response.data });
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(URL)
    };

    React.useEffect(() => {
        FetchData();
        // setIsNext(true);
        console.log("inside useffect")
    }, []);

    return (
        <div>
            <CustomButton
                variant={ props.variant }
                clickhandler={ () => handleClickOpen() }
                startIcon={ props.startIcon }
                activeText={ props.activeText }
            >{ props.buttontext }</CustomButton>
            <Dialog
                PaperProps={ {
                    style: {
                        backgroundColor: 'transparent',
                        minWidth: "30vw",
                        maxWidth: "fit-content",
                        width: "2000px",
                    },
                } }
                onClose={ handleClose } aria-labelledby="customized-dialog-title" open={ open }>
                <DialogTitle id="customized-dialog-title" onClose={ handleClose }>
                    <>{ props.buttontext !== "Delete" ? `${props.buttontext} Invoice` : "Delete record(s)?" }</>
                </DialogTitle>
                <DialogContent dividers>
                    { props.children }
                </DialogContent>
                <DialogActions>
                    <CustomButton
                        variant="text"
                        clickhandler={ () => handleClose() }
                    >Cancel</CustomButton>
                    { props.buttontext !== "Delete" ?
                        <>
                            <div style={ { flex: '1 0 0' } } />
                            <CustomButton
                                variant="outlined"
                                clickhandler={ () => props.buttontext === "Add" ? clearAddInvoice() : props.buttontext === "Edit" ? clearEditInvoice() : null }
                                activeText={ true }
                            >Reset</CustomButton>
                        </>
                        : ""
                    }
                    { useSelector(state => state.add.valid) ?
                        <CustomButton
                            variant="contained"
                            clickhandler={ () => handleClose() }
                            last={ true }
                            autoFocus
                        >{ props.buttontext !== "Edit" ? props.buttontext : "Save" }</CustomButton>
                        :
                        <CustomSnackBar
                            variant="contained"
                            buttontext={ props.buttontext !== "Edit" ? props.buttontext : "Save" }
                        // clickhandler={ () => handleClose() }
                        />
                    }
                    {/* 
                     */}
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Modal;
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
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

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
        border: "1px solid #1A262F",
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
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    // const style = useStyles()

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div>
            <CustomButton
                variant={ props.variant }
                clickhandler={ () => handleClickOpen() }
                startIcon={ props.startIcon }
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
                    {/* <FormControl >
                        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={ open }
                            onClose={ handleClose }
                            onOpen={ handleOpen }
                            value={ age }
                            onChange={ handleChange }
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={ 10 }>Ten</MenuItem>
                            <MenuItem value={ 20 }>Twenty</MenuItem>
                            <MenuItem value={ 30 }>Thirty</MenuItem>
                        </Select>
                    </FormControl> */}
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
                                clickhandler={ () => handleClose() }
                            >Reset</CustomButton>
                        </>
                        : ""
                    }
                    <CustomSnackBar
                        variant="contained"
                        buttontext={ props.buttontext !== "Edit" ? props.buttontext : "Save" }
                        clickhandler={ () => handleClose() }
                    />
                    {/* <CustomButton
                        variant="contained"
                        clickhandler={ () => handleClose() }
                        last={ true }
                        autoFocus
                    >{ props.buttontext !== "Edit" ? props.buttontext : "Save" }</CustomButton> */}
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Modal;
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import WarningTwoToneIcon from '@material-ui/icons/WarningTwoTone';
import CustomButton from './CustomButton';
import { pxToVh } from '../../utils/theme';
// import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    snack: {
        borderLeft: "5px solid #FF5B5B",
        fontSize: pxToVh(20),
    },
    icon: {
        color: "#FF5B5B"
    }
}))

const snackBarStyles = theme => ({
    root: {
        borderRadius: pxToVh(10),
        '& .MuiSnackbarContent-message': {
            fontSize: pxToVh(20),
        },
        '& .MuiSnackbarContent-root': {
            borderRadius: pxToVh(10),
        }
    }
})
const CustomSnackBar = withStyles(snackBarStyles)(Snackbar)

export default function SimpleSnackbar(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const classes = useStyles()

    return (
        <div>
            {/* <Button onClick={ handleClick }>Open simple snackbar</Button> */ }
            <CustomButton
                variant="contained"
                clickhandler={ props.clickhandler ? props.clickhandler : () => handleClick() }
                last={ true }
                autoFocus
            >{ props.buttontext }</CustomButton>
            <CustomSnackBar
                anchorOrigin={ {
                    vertical: 'bottom',
                    horizontal: 'left',
                } }
                open={ open }
                autoHideDuration={ 6000 }
                onClose={ handleClose }
                // TransitionComponent={ <Slide TransitionLeft direction="left" /> }
                message={
                    <>
                        <IconButton size="large" aria-label="close" color="inherit" onClick={ handleClose }>
                            <WarningTwoToneIcon className={ classes.icon } fontSize="large" />
                        </IconButton>
                        Mandatory fields can't be empty
                    </>
                }
                action={
                    <React.Fragment>
                        <IconButton size="large" aria-label="close" color="inherit" onClick={ handleClose }>
                            <CloseIcon fontSize="large" />
                        </IconButton>
                    </React.Fragment>
                }
                className={ classes.snack }
            />
        </div>
    );
}

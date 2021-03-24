import React from 'react'
import {
    makeStyles,
    Typography,
} from '@material-ui/core';
import Modal from '../templates/Modal';
import { pxToVh } from '../../utils/theme';
import {
    useSelector,
    // useDispatch 
} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    text: {
        color: theme.palette.colors.color_97A1A9,
        height: "fit-content",
        minWidth: "fit-content",
        fontSize: pxToVh(20),
        fontFamily: theme.palette.font.ubuntu,
    },
    warning: {
        color: theme.palette.colors.color_FF5B5B_RED,
        fontWeight: 600,
    },
}))


export const DeleteModal = () => {
    const selected = useSelector(state => state.selected.selected)
    const classes = useStyles()

    return (
        <Modal
            variant="outlined"
            buttontext="Delete"
            startIcon="RemoveIcon"
            activeText={ selected.length > 0 ? true : false }
        >
            <Typography className={ classes.text }>You'll lose your record(s) after this action. We can't recover<br />them once you delete.
                <br /><br />Are you sure you want to <span className={ classes.warning }>permanently delete</span> them?</Typography>
        </Modal>
    )
}


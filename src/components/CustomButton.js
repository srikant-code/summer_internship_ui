import React from "react"
import { makeStyles, Button } from '@material-ui/core';
import { pxToVh, pxToVw } from '../utils/theme';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
    buttonMain: {
        borderRadius: pxToVh(10),
        // backgroundColor: theme.palette.colors.color_97A1A9,
        backgroundColor: theme.palette.colors.color_14AFF1_SKYBLUE,
        color: theme.palette.colors.color_FFFFFF_WHITE,
        textTransform: "capitalize",
        fontWeight: "normal",
        fontFamily: "Ubuntu",
        fontSize: pxToVh(20),
        marginRight: pxToVw(20),
        height: "fit-content",
        minWidth: "fit-content",
    },
    buttonOutlined: {
        borderRadius: pxToVh(10),
        borderColor: theme.palette.colors.color_97A1A9,
        backgroundColor: theme.palette.colors.color_273D49CC,
        color: theme.palette.colors.color_97A1A9,
        textTransform: "capitalize",
        fontWeight: "normal",
        fontFamily: "Ubuntu",
        fontSize: pxToVh(20),
        marginRight: pxToVw(20),
        height: "fit-content",
        minWidth: "fit-content",
    },
    buttonActive: {
        borderColor: theme.palette.colors.color_14AFF1_SKYBLUE,
    }
}))

const CustomButton = (props) => {
    const classes = useStyles();
    let icon = null;
    switch (props.startIcon) {
        case 'AddIcon': {
            icon = <AddIcon />
            break
        }
        case 'EditIcon': {
            icon = <EditIcon />
            break
        }
        case 'RemoveIcon': {
            icon = <RemoveIcon />
            break
        }
        default: icon = null
    }
    return (
        <Button
            className={ props.variant === "contained" ? classes.buttonMain : props.variant === "outlined" ? classes.buttonOutlined : `${classes.buttonActive}${classes.buttonOutlined}` }
            //contained, outlined, active
            variant={ props.variant }
            elevation={ props.elevation }
            onClick={ props.handler }
            startIcon={ icon }>
            {props.buttonText }
        </Button>
    )
}

export default CustomButton;
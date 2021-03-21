import React from "react"
import { makeStyles, Button } from '@material-ui/core';
import { pxToVh, pxToVw } from '../../utils/theme';
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
        fontFamily: theme.palette.font.ubuntu,
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
        fontFamily: theme.palette.font.ubuntu,
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
    const classes = useStyles()
    let icon = null
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
    let variant = null
    switch (props.variant) {
        case "contained": {
            variant = classes.buttonMain
            break
        }
        case "outlined": {
            variant = classes.buttonOutlined
            break
        }
        case "text": {
            variant = classes.buttonOutlined
            break
        }
        default: variant = null
    }

    return (
        <Button
            // { ...props }
            className={ variant }
            //contained, outlined, active
            variant={ props.variant }
            elevation={ props.elevation }
            onClick={ props.clickhandler }
            startIcon={ icon }
            autoFocus={props.autoFocus}
            style={ {
                marginRight: props.last ? pxToVh(0) : pxToVw(20),
                borderColor: props.activeText ? "#14AFF1" : "#97A1A9",
            } }
        >
            { props.children }
        </Button>
    )
}

export default CustomButton;
import React from 'react'
import { makeStyles, Typography, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { pxToVh, pxToVw } from '../../utils/theme';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker,
// } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        margin: `${pxToVh(0)} ${pxToVh(0)} ${pxToVh(30)} ${pxToVh(0)}`,
    },
    text: {
        fontSize: pxToVh(20),
        fontFamily: theme.palette.font.ubuntu,
        display: "inline",
        minWidth: pxToVw(170),
        width: "5vw",
    },
    star: {
        color: theme.palette.colors.color_FF5B5B_RED,
    },
    last: {
        marginBottom: 0,
    }
}))

const textFieldStyles = theme => ({
    root: {
        borderRadius: pxToVh(10),
        border: `${theme.palette.colors.color_356680} solid 2px`,
        backgroundColor: theme.palette.colors.color_273D49CC,
        color: theme.palette.colors.color_97A1A9,
        textTransform: "capitalize",
        fontSize: pxToVh(20),
        fontWeight: "normal",
        lineHeight: "2rem",
        fontFamily: "Ubuntu",
        height: "fit-content",
        minWidth: "fit-content",
        marginLeft: pxToVw(10),
        paddingLeft: pxToVw(15),
        paddingTop: pxToVh(3),
        flex: "1 0 0",
        // '&input:focused': {
        //     border: `${theme.palette.colors.color_356680} solid 4px`,
        // }
        // "&": {
        //     borderColor: "#C52328",
        //     borderWidth: "5px"
        // }
        '& .MuiInputBase-multiline': {
            lineHeight: "2rem",
        },
        // "& .MuiOutlinedInput-notchedOutline": {
        //     borderColor: "blue"
        // },
    }
})
const CustomTextField = withStyles(textFieldStyles)(TextField)

const InputFields = (props) => {
    const classes = useStyles()
    return (
        <div
            className={ classes.container }
            style={ { marginBottom: props.last ? 0 : "" } }
        >
            <Typography className={ classes.text }>{ props.textLabel }
                { props.required ? <sup className={ classes.star }>*</sup> : <></> }
            </Typography>
            <CustomTextField
                id={ props.id }
                placeholder={ props.placeholder }
                rows={ props.rows }
                value={ props.value }
                onChange={ props.handler }
                InputProps={ { disableUnderline: true, } }
                required={ props.required }
                multiline={ props.multiline ? true : false }
                type={ props.type === "date" ? "date" : "" }
                format={ props.type === "date" ? "MM/dd/yyyy" : "" }
                style={ {
                    paddingTop: props.multiline ? pxToVh(10) : "",
                    border: props.error ? '#FF5B5B solid 2px' : `#356680 solid 2px`,
                } }
            />
        </div>
    )
}

export default InputFields;
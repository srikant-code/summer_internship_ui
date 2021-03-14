import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core';
import logo from '../assets/companyLogo.svg'
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as CompanyLogo } from '../assets/Group 20399.svg';
import { Typography } from '@material-ui/core';
import { COLORS } from "../utils/constants";
import { pxToRem, pxToVh, pxToVw } from '../utils/theme';

const useStyles = makeStyles((theme) => ({
    root: {
        flexFlow: "row wrap",
        display: "flex",
        justifyContent: "center",
    },
    companyLogo: {
        position: "absolute",
        marginTop: pxToVh(20),
        marginLeft: pxToVw(30),
        fontSize: pxToRem(39),
        width: "fit-content",
    }
}));


export const Header = () => {
    console.log(logo, Logo)
    const classes = useStyles();
    return (
        <>
            <CompanyLogo className={ classes.companyLogo }></CompanyLogo>
            <div className={ classes.root }>
                <Logo style={ {
                    height: pxToVh(49.5),
                    marginTop: pxToVh(20),
                } }></Logo>
                {/* <Modal></Modal> */ }
            </div>
        </>
    );
}
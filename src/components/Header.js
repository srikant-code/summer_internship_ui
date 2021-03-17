import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core';
// import logo from '../assets/companyLogo.svg'
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as CompanyLogo } from '../assets/Group 20399.svg';
// import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexFlow: "row wrap",
        display: "flex",
        justifyContent: "center",
    },
    companyLogo: {
        position: "absolute",
        marginTop: "20px",
        marginLeft: "20px",
        fontSize: "39px",
        width: "300px",
    }
}));


export const Header = () => {
    const classes = useStyles();
    return (
        <>
            <CompanyLogo className={ classes.companyLogo }></CompanyLogo>
            <div className={ classes.root }>
                <Logo style={ {
                    height: "49.5px",
                    marginTop: "20px",
                } }></Logo>
            </div>
        </>
    );
}
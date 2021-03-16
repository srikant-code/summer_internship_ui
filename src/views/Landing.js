import {
    InputBase,
    IconButton,
    makeStyles,
    Paper,
    Button,
    Typography
} from '@material-ui/core';
import React from 'react'
import Modal from '../components/Modal'
import SearchIcon from '@material-ui/icons/Search';
import { Header } from '../components/Header';
import InvoiceTable from '../components/InvoiceTable';
import { pxToRem, pxToVh, pxToVw } from '../utils/theme';
import CustomButton from '../components/CustomButton';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexFlow: "row wrap",
        // display: "flex",
        // justifyContent: "center",
        minWidth: "fit-content",
        minHeight: "fit-content",
        width: "100vw",
        height: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center"
    },
    invoiceList: {
        marginTop: pxToVh(20),
        marginBottom: pxToVh(20),
        marginLeft: pxToVw(30),
        fontSize: pxToVh(28),
        width: "100vw",
        color: theme.palette.colors.color_FFFFFF_WHITE
    },
    tableWrapper: {
        minHeight: "fit-content",
        minWidth: "fit-content",
        marginLeft: pxToVw(30),
        marginRight: pxToVw(30),
        marginBottom: pxToVh(30),
        borderRadius: pxToVw(10),
        width: `calc(100vw - 2*${pxToVw(30)})`,
        height: `calc(100vh - ${pxToVh(200)})`,
        backgroundColor: theme.palette.colors.color_273D49CC,
        overflow: "hidden",
    },
    buttonsBar: {
        height: "fit-content",
        padding: `${pxToVw(30)} ${pxToVh(30)}`,
        color: theme.palette.colors.color_FFFFFF_WHITE,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    searchOutlined: {
        borderRadius: pxToVh(10),
        border: `${theme.palette.colors.color_97A1A9} solid 1px`,
        backgroundColor: theme.palette.colors.color_273D49CC,
        color: theme.palette.colors.color_97A1A9,
        textTransform: "capitalize",
        fontWeight: "normal",
        fontFamily: "Ubuntu",
        height: "fit-content",
        minWidth: "fit-content",
        fontSize: pxToVh(20),
        paddingLeft: pxToVw(20),
        paddingTop: pxToVw(5),
    },
    searchIcon: {
        color: theme.palette.colors.color_97A1A9,
        marginTop: "-2px",
    }
}))

const Landing = () => {
    const classes = useStyles();
    return (
        <>
            <Header />
            <Typography className={ classes.invoiceList }>Invoice List</Typography>
            <div className={ classes.root }>
                <Paper className={ classes.tableWrapper }>
                    <div className={ classes.buttonsBar }>
                        <div>
                            <CustomButton
                                variant="contained"
                                elevation={ 0 }
                                onCLick={ null }
                                buttonText="Predict"
                            />
                            <CustomButton
                                variant="outlined"
                                buttonText="View Correspondence"
                            />
                        </div>
                        <div style={ { display: "inherit" } }>
                            <CustomButton
                                variant="outlined"
                                buttonText="Add"
                                startIcon="AddIcon"
                            />
                            <CustomButton
                                variant="outlined"
                                buttonText="Edit"
                                startIcon="EditIcon"
                            />
                            <CustomButton
                                variant="outlined"
                                buttonText="Delete"
                                startIcon="RemoveIcon"
                            />
                            <Paper component="form" className={ classes.searchOutlined } elevation={ 0 }>
                                <InputBase
                                    className={ classes.searchOutlined }
                                    style={ { border: "none", marginTop: "-10px", marginLeft: "-20px" } }
                                    placeholder="Search by Invoice Number"
                                    inputProps={ { 'aria-label': 'Search by Invoice Number' } }
                                />
                                <IconButton type="submit" className={ classes.searchIcon } aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </div>
                    </div>
                    <InvoiceTable />
                </Paper>
                <Modal></Modal>
            </div>
        </>
    )
}
export default Landing;
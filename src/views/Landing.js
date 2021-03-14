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
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Remove';
import SearchIcon from '@material-ui/icons/Search';
import { Header } from '../components/Header';
import InvoiceTable from '../components/InvoiceTable';
import { pxToRem, pxToVh, pxToVw } from '../utils/theme';

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
        minHeight: "100%",
        marginLeft: pxToVw(30),
        marginRight: pxToVw(30),
        marginBottom: pxToVh(30),
        borderRadius: pxToVw(10),
        width: `calc(100vw - 2*${pxToVw(30)})`,
        height: "100vh",
        backgroundColor: theme.palette.colors.color_273D49CC
    },
    buttonsBar: {
        height: "fit-content",
        padding: `${pxToVw(30)} ${pxToVh(30)}`,
        color: theme.palette.colors.color_FFFFFF_WHITE,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    buttonMain: {
        borderRadius: pxToVh(10),
        backgroundColor: theme.palette.colors.color_97A1A9,
        color: theme.palette.colors.color_FFFFFF_WHITE,
        textTransform: "capitalize",
        fontWeight: "normal",
        fontFamily: "Ubuntu",
        fontSize: pxToVh(20),
        marginRight: pxToVw(20),
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
    },
    searchOutlined: {
        borderRadius: pxToVh(10),
        border: `${theme.palette.colors.color_97A1A9} solid 1px`,
        backgroundColor: theme.palette.colors.color_273D49CC,
        color: theme.palette.colors.color_97A1A9,
        textTransform: "capitalize",
        fontWeight: "normal",
        fontFamily: "Ubuntu",
        fontSize: pxToVh(20),
        paddingLeft: pxToVw(20),
        paddingTop: pxToVw(5),
    },
    searchIcon: {
        color: theme.palette.colors.color_97A1A9
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
                            <Button
                                className={ classes.buttonMain }
                                variant="contained"
                                elevation={ 0 }>
                                Predict
                            </Button>
                            <Button
                                className={ classes.buttonOutlined }
                                variant="outlined">
                                View Correspondence
                            </Button>
                        </div>
                        <div style={ { display: "inherit" } }>
                            <Button
                                className={ classes.buttonOutlined }
                                variant="outlined"
                                startIcon={ <AddIcon /> }>
                                Add
                            </Button>
                            <Button
                                className={ classes.buttonOutlined }
                                variant="outlined"
                                startIcon={ <EditIcon /> }>
                                Edit
                            </Button>
                            <Button
                                className={ classes.buttonOutlined }
                                variant="outlined"
                                startIcon={ <RemoveIcon /> }>
                                Delete
                            </Button>
                            <Paper component="form" className={ classes.searchOutlined } elevation={ 0 }>
                                <InputBase
                                    className={ classes.buttonOutlined }
                                    placeholder="Search by Invoice Number"
                                    inputProps={ { 'aria-label': 'Search by Invoice Number' } }
                                />
                                <IconButton type="submit" className={ classes.searchIcon } aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                            {/* <Modal></Modal> */ }
                        </div>
                    </div>
                    <InvoiceTable />
                </Paper>
            </div>
        </>
    )
}
export default Landing;
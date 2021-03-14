import {
    InputBase,
    IconButton,
    makeStyles,
    Button,
    Typography
} from '@material-ui/core';
import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import { Header } from '../components/Header';
import InvoiceTable from '../components/InvoiceTable';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexFlow: "row wrap",
        // display: "flex",
        // justifyContent: "center",
        width: "100vw",
        height: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center"
    },
    invoiceList: {
        marginTop: "20px",
        marginBottom: "20px",
        marginLeft: "30px",
        fontSize: "28px",
        width: "100vw",
        color: "#FFFFFF"
    },
    tableWrapper: {
        minHeight: "100%",
        marginLeft: "30px",
        marginRight: "30px",
        marginBottom: "30px",
        width: `97.5vw`,
        height: "100vh",
        backgroundColor: "#273D49CC"
    },
    buttonsBar: {
        height: "105px",
        padding: `30px`,
        color: "#FFFFFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    buttonMain: {
        borderRadius: "10px",
        backgroundColor: "#97A1A9",
        color: "#FFFFFF",
        // textTransform: "capitalize",
        fontWeight: "normal",
        fontSize: "20px",
        marginRight: "20px",
    },
    buttonOutlined: {
        borderRadius: "10px",
        borderColor: "#97A1A9",
        backgroundColor: "#273D49CC",
        color: "#97A1A9",
        fontWeight: "normal",
        fontSize: "20px",
        marginRight: "20px",
    },
    searchOutlined: {
        borderRadius: "10px",
        border: `#97A1A9 solid 1px`,
        backgroundColor: "#273D49CC",
        color: "#97A1A9",
        fontSize: "20px",
        paddingLeft: "20px",
        paddingTop: "5px",
    },
    searchIcon: {
        color: "#97A1A9"
    }
}))

const Landing = () => {
    const classes = useStyles();
    return (
        <>
            <Header />
            <Typography className={ classes.invoiceList }>Invoice List</Typography>
            <div className={ classes.root }>
                <div className={ classes.tableWrapper }>
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
                                startIcon={ <DeleteIcon /> }>
                                Delete
                            </Button>
                            <div component="form" className={ classes.searchOutlined } elevation={ 0 }>
                                <InputBase
                                    className={ classes.buttonOutlined }
                                    placeholder="Search by Invoice Number"
                                    inputProps={ { 'aria-label': 'Search by Invoice Number' } }
                                />
                                <IconButton type="submit" className={ classes.searchIcon } aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <InvoiceTable />
                </div>
            </div>
        </>
    )
}
export default Landing;
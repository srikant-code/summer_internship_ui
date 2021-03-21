import React from 'react';
import { useCallback } from "react";
import {
    Table,
    TableContainer,
    TableBody,
    TableCell,
    TableRow,
    TableHead,
    Paper,
    CircularProgress,
    makeStyles,
    withStyles,
    Checkbox,
} from "@material-ui/core";
import { formatter } from '../utils/formatter';
import { pxToVw, pxToVh } from '../utils/theme';
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const StyledTableCell = withStyles((theme) => ({
    root: {
        padding: "10px",
    },
    head: {
        // backgroundColor: theme.palette.colors.transparent,
        backgroundColor: "#2c414e",
        borderBottom: `1px solid ${theme.palette.colors.color_39495E}`,
        color: theme.palette.colors.color_97A1A9,
        border: "none",
        fontSize: pxToVh(18),
        fontFamily: theme.palette.font.ubuntu,
    },
    body: {
        fontSize: pxToVh(20),
        fontFamily: theme.palette.font.ubuntu,
        color: theme.palette.colors.color_FFFFFF_WHITE,
        border: "none",
        width: "300px",
        '&:first-child': {
            width: "10px",
        }
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:hover': {
            cursor: "pointer",
            backgroundColor: `${theme.palette.colors.color_2A5368} !important`,
        },
        '&:hover > *': {
            // color: `${theme.palette.colors.color_97A1A9} !important`,
            color: `${theme.palette.colors.color_FFFFFF_WHITE} !important`,
        },
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.colors.color_283A46,
        },
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.colors.color_39495E,
        },
    },
}))(TableRow);

function createData(custName, customerID, invoice, invAmount, dueDate, predPayDate, predAgeBucket, notes) {
    return { custName, customerID, invoice, invAmount, dueDate, predPayDate, predAgeBucket, notes };
}

const rows = [
    createData('Andrea', 1597960, 68907670, formatter(24786986), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea Hitler', 1597961, 89076720, formatter(24786), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea James', 1597962, 69076720, formatter(86986), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea Ponting', 1597963, 68076720, formatter(86), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea Jil', 1597964, 68907720, formatter(6986), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea Siri', 1597965, 68976720, formatter(8686), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea Ant', 1597966, 6876720, formatter(986), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),

    createData('Andrea', 1597960, 6890760, formatter(786986), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea Hitler', 1597961, 6076720, formatter(4786), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea James', 1597962, 676720, formatter(8986), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea Ponting', 1597963, 6906720, formatter(6), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea Jil', 1597964, 60, formatter(696), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea Siri', 1597965, 76720, formatter(686), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea Ant', 1597966, 68720, formatter(96), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    //TODO: add -- for empty values
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles((theme) => ({
    tableContainer: {
        height: "70vh",
        width: `calc(100vw - 2*${pxToVw(60)})`,
        backgroundColor: "transparent",
        overflow: "scroll",
        // width: `calc(100% - ${2 * pxToVw(30)}) !important`,
        padding: `${pxToVh(0)} 30px`,
    },
    table: {
        width: "fit-content",
    }
}));

const checkBoxStyles = theme => ({
    root: {
        '&$checked': {
            color: theme.palette.colors.color_14AFF1_SKYBLUE,
        },
        color: theme.palette.colors.color_97A1A9,
    },
    checked: {},
})
const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

const InvoiceTable = () => {

    const classes = useStyles();
    let [responseData, setResponseData] = React.useState([]);
    let [isNext, setIsNext] = React.useState(false);
    let [pageNumber, setPageNumber] = React.useState(0);
    let limit = 15;
    // const fetchData = useCallback(() => {      
    //     setPageNumber(pageNumber + 1) 
    //     let URL = `http://localhost:8080/Summer_Internship_Backend/api/v1/invoices?page=${pageNumber}&limit=${limit}`;
    //     axios
    //         .get(URL)
    //         .then((response) => {
    //             setResponseData([...responseData, ...response.data]);
    //             console.log(response);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, [responseData, URL, pageNumber]);

     const fetchData = () => {      
        console.log("inside fetchdata")      
        setPageNumber(pageNumber + 1)
        let URL = `http://localhost:8080/Summer_Internship_Backend/api/v1/invoices?page=${pageNumber}&limit=${limit}`;
        axios
            .get(URL)
            .then((response) => {
                setResponseData([...responseData, ...response.data]);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };    

    // const getNextData = useCallback(() => {
    //     // if (pageNumber >= 10) {
    //     //     setIsNext(false);
    //     // }
    //     fetchData();
    // }, [pageNumber, fetchData]);

    React.useEffect(() => {
        fetchData();        
        setIsNext(true);  
        console.log("inside useffect")      
    }, []);



    const [selected, setSelected] = React.useState([]);

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const selectedAll = responseData.map((n) => n.doc_id);
            setSelected(selectedAll);
            console.log(responseData.length)
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, ID) => {
        const selectedIndex = selected.indexOf(ID);
        let newSelected = [];

        // id not selected / present in state
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, ID);
        } else if (selectedIndex === 0 && selected.length > 1) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected)
    }
    // if ID is selected
    const isSelected = (ID) => selected.indexOf(ID) !== -1;
    return (
        <TableContainer id="scrollableDiv" component={ Paper } className={ classes.tableContainer }>
            <InfiniteScroll
                dataLength={ responseData.length }
                next={() => {
                    // console.log("inside infinite")
                    fetchData()
                 }}
                hasMore={ isNext }
                scrollableTarget="scrollableDiv"
                loader={
                    <div style={{ 
                        justifyContent: "center", 
                        display: "flex", 
                        flexDirection: "column",        
                        alignItems: "center",
                        height: "80%", 
                        overflow: "hidden",
                        padding: "3rem"
                    }}>
                        <CircularProgress size={50} style={{color: "#C0C6CA"}}/>
                        <p style={ { color: "#C0C6CA", fontSize: pxToVh(18), fontFamily: "Ubuntu" } }>Loading</p>
                    </div>
                }
                useWindow={ false }
            >
                <Table size="medium" className={ classes.table } stickyHeader aria-label="sticky dense table" >
                    <TableHead onClick={ handleSelectAllClick }>
                        <TableRow>
                            <StyledTableCell align="left" title="Select">
                                <CustomCheckbox size="medium" />
                            </StyledTableCell>
                            <StyledTableCell align="left" title="Customer&nbsp;Name">Customer&nbsp;Name</StyledTableCell>
                            <StyledTableCell align="left" title="Customer</">Customer&nbsp;#</StyledTableCell>
                            <StyledTableCell align="left" title="Invoice</">Invoice&nbsp;#</StyledTableCell>
                            <StyledTableCell align="right" title="Invoice&nbsp;Amount">Invoice&nbsp;Amount&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right" title="Due&nbsp;Date">Due&nbsp;Date&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right" title="Predicted&nbsp;Payment Date">Delay</StyledTableCell>
                            <StyledTableCell align="left" title="Predicted&nbsp;Aging">Predicted&nbsp;Aging&nbsp;Bucket&nbsp;</StyledTableCell>
                            <StyledTableCell align="left" title="Notes">Notes</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { responseData.map((row, index) => {
                            const isItemSelected = isSelected(row.doc_id)
                            const labelId = `enhanced-table-checkbox-${index}`
                            return (
                                <StyledTableRow hover key={ row.doc_id }
                                    onClick={ (event) => handleClick(event, row.doc_id) }
                                    role="checkbox"
                                    aria-checked={ isItemSelected }
                                    tabIndex={ index }
                                >
                                    <StyledTableCell align="left" title="Select">
                                        <CustomCheckbox
                                            checked={ isItemSelected }
                                            inputProps={ { 'aria-labelledby': labelId } }
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell component="th" id={ labelId } scope="row">{ row.name_customer ? row.name_customer : "--" }</StyledTableCell>
                                    <StyledTableCell align="left" title={ row.cust_number } >{ row.cust_number ? row.cust_number : "--" }</StyledTableCell>
                                    <StyledTableCell align="left" title={ row.doc_id } >{ row.doc_id ? row.doc_id : "--" }</StyledTableCell>
                                    <StyledTableCell align="right" title={ row.total_open_amount } > { row.total_open_amount ? "$" + formatter(row.total_open_amount) : "--" }</StyledTableCell>
                                    <StyledTableCell align="right" title={ row.due_in_date } >{ row.due_in_date ? row.due_in_date : "--" }</StyledTableCell>
                                    <StyledTableCell align="right" title={ row.predPayDate } >{ row.predPayDate ? row.predPayDate : "--" }</StyledTableCell>
                                    <StyledTableCell align="left" title={ row.delayinc } >{ row.delayinc ? row.predAgeBucket : "--" } days</StyledTableCell>
                                    <StyledTableCell align="left" title={ row.notes } >{ row.notes ? row.notes : "Lorem Ipsum dolor..." }</StyledTableCell>
                                </StyledTableRow>
                            )
                        }) }
                    </TableBody>
                </Table>
            </InfiniteScroll>
        </TableContainer>
    );
}

export default InvoiceTable;
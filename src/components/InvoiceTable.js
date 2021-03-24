import React from 'react';
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
import {
    useSelector,
    useDispatch
} from 'react-redux';
import { selectInvoice } from "../actions/Actions";

const StyledTableCell = withStyles((theme) => ({
    root: {
        padding: "10px",
    },
    head: {
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


const useStyles = makeStyles((theme) => ({
    tableContainer: {
        height: "70vh",
        width: `calc(100vw - 2*${pxToVw(60)})`,
        backgroundColor: "transparent",
        overflow: "scroll",
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

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}


const InvoiceTable = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch()
    let [responseData, setResponseData] = React.useState([]);
    let [isNext, setIsNext] = React.useState(false);
    let [pageNumber, setPageNumber] = React.useState(0);
    let limit = 15;
    let [last, setLast] = React.useState(0);

    const [, setResults] = React.useState([]);
    const [, setIsSearching] = React.useState(false);
    // const [noValue, setnoValue] = React.useState(false);

    // const IsnoValue = (result) => {
    //     if (result.length === 0) {
    //         return 1;
    //     }
    //     return null;
    // }

    const searchterm = useSelector(state => state.search.searchTerm)
    console.log(searchterm)
    const debouncedSearchTerm = useDebounce(searchterm, 3000);

    const fetchData = (filter) => {
        console.log("inside fetchdata")
        setPageNumber(pageNumber + 1)
        let flag;
        let URL = `http://localhost:8080/Summer_Internship_Backend/api/v1/invoices?page=${pageNumber}&limit=${limit}`;
        setLast(filter)
        if (filter !== "") {
            if (filter.length !== last.length)
                pageNumber = 0
            URL = `http://localhost:8080/Summer_Internship_Backend/api/v1/invoices?id=${filter}&page=${pageNumber}&limit=${limit}`;
            flag = 1
        }
        axios
            .get(URL)
            .then((response) => {
                setResponseData([...responseData, ...response.data]);
                if (flag === 1) {
                    setResponseData([...response.data])
                }
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log("ping data", responseData)
        console.log("ping data", URL)
    };

    React.useEffect(() => {
        if (debouncedSearchTerm) {
            setIsSearching(true);
            // const filter = authors.filter((autho) => {
            //     return autho.author
            //         .toLowerCase()
            //         .startsWith(debouncedSearchTerm.toLowerCase());
            // });
            // FetchData(debouncedSearchTerm);
            console.log(debouncedSearchTerm)
            fetchData(debouncedSearchTerm)
            setIsSearching(false)
            // if (IsnoValue(filter) === 1) {
            //     setnoValue(true);
            // } else {
            //     setnoValue(false);
            //     setResults(filter);
            // }
        } else {
            setResults([]);
            fetchData("")
        }

        setIsNext(true);
        console.log("inside useffect")
    }, [debouncedSearchTerm]);



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
        dispatch(selectInvoice(newSelected))
    }

    // if (props.text !== "")
    //     setResponseData(props.searchResults)
    // if ID is selected
    const isSelected = (ID) => selected.indexOf(ID) !== -1;
    return (
        <TableContainer id="scrollableDiv" component={ Paper } className={ classes.tableContainer }>
            <InfiniteScroll
                dataLength={ responseData.length }
                next={ () => {
                    // console.log("inside infinite")
                    fetchData(debouncedSearchTerm === "" ? "" : debouncedSearchTerm)
                } }
                hasMore={ isNext }
                scrollableTarget="scrollableDiv"
                loader={
                    <div style={ {
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "80%",
                        overflow: "hidden",
                        padding: "3rem"
                    } }>
                        <CircularProgress size={ 50 } style={ { color: "#C0C6CA" } } />
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
                                    <StyledTableCell align="right" title={ row.predPayDate } >{ row.predPayDate ? row.predPayDate : "--" } days</StyledTableCell>
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
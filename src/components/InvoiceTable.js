import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { formatter } from '../utils/formatter';
import Checkbox from '@material-ui/core/Checkbox';
import { pxToRem, pxToVw, pxToVh } from '../utils/theme';




const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.colors.transparent,
        borderBottom: `1px solid ${theme.palette.colors.color_283A46}`,
        color: theme.palette.colors.color_97A1A9,
        border: "none",
        fontSize: pxToVh(18),
        font: theme.palette.font.ubuntu,
    },
    body: {
        fontSize: pxToVh(20),
        color: theme.palette.colors.color_FFFFFF_WHITE,
        border: "none",
        font: theme.palette.font.ubuntu,
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
    createData('Andrea', 1597960, 689076720, formatter(24786986), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea Hitler', 1597961, 689076720, formatter(24786), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea James', 1597962, 689076720, formatter(86986), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea Ponting', 1597963, 689076720, formatter(86), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea Jil', 1597964, 689076720, formatter(6986), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea Siri', 1597965, 689076720, formatter(8686), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea Ant', 1597966, 689076720, formatter(986), "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    //TODO: add -- for empty values
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
        // width: `calc(100% - ${2 * pxToVw(30)}) !important`,
        padding: `${pxToVw(30)} ${pxToVh(30)}`,
    },
});



const InvoiceTable = () => {
    const [selected, setSelected] = React.useState([]);
    const classes = useStyles();

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const selectedAll = rows.map((n) => n.customerID);
            setSelected(selectedAll);
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
        <TableContainer component={ Paper } style={ { backgroundColor: "transparent", } }>
            <Table className={ classes.table } size="small" stickyHeader aria-label="sticky dense table" >
                <TableHead onClick={ handleSelectAllClick }>
                    <TableRow>
                        <StyledTableCell align="left" >
                            <Checkbox />
                        </StyledTableCell>
                        <StyledTableCell align="left">Customer&nbsp;Name</StyledTableCell>
                        <StyledTableCell align="left">Customer&nbsp;#</StyledTableCell>
                        <StyledTableCell align="left">Invoice&nbsp;#</StyledTableCell>
                        <StyledTableCell align="right">Invoice&nbsp;Amount&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Due&nbsp;Date&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Predicted&nbsp;Payment&nbsp;Date&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="left">Predicted&nbsp;Aging&nbsp;Bucket&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="left">Notes&nbsp;(g)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { rows.map((row, index) => {
                        const isItemSelected = isSelected(row.customerID)
                        const labelId = `enhanced-table-checkbox-${index}`
                        return (
                            <StyledTableRow hover key={ row.customerID }
                                onClick={ (event) => handleClick(event, row.customerID) }
                                role="checkbox"
                                aria-checked={ isItemSelected }
                                tabIndex={ index }
                            >
                                <StyledTableCell align="left">
                                    <Checkbox
                                        checked={ isItemSelected }
                                        inputProps={ { 'aria-labelledby': labelId } }
                                    />
                                </StyledTableCell>
                                <StyledTableCell component="th" id={ labelId } scope="row">
                                    { row.custName }
                                </StyledTableCell>
                                <StyledTableCell align="left">{ row.customer }</StyledTableCell>
                                <StyledTableCell align="left">{ row.invoice }</StyledTableCell>
                                <StyledTableCell align="right">{ row.invAmount }</StyledTableCell>
                                <StyledTableCell style={ row.dueDate >} align="right">{ row.dueDate }</StyledTableCell>
                                <StyledTableCell align="right">{ row.predPayDate }</StyledTableCell>
                                <StyledTableCell align="left">{ row.predAgeBucket }</StyledTableCell>
                                <StyledTableCell align="left">{ row.notes }</StyledTableCell>
                            </StyledTableRow>
                        )
                    }) }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default InvoiceTable;
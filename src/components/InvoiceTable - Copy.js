import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#39495E",
        color: "#97A1A9",
    },
    body: {
        fontSize: 14,
        color: "#FFFFFF",
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: { border: "none" }
}))(TableRow);

function createData(custName, customer, invoice, invAmount, dueDate, predPayDate, predAgeBucket, notes) {
    return { custName, customer, invoice, invAmount, dueDate, predPayDate, predAgeBucket, notes };
}

const rows = [
    createData('Andrea James', 1597960, 689076720, 24786986, "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea James', 1597960, 689076720, 24786, "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea James', 1597960, 689076720, 86986, "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea James', 1597960, 689076720, 86, "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea James', 1597960, 689076720, 6986, "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea James', 1597960, 689076720, 86986, "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    createData('Andrea James', 1597960, 689076720, 986, "4-12-2019", "4-12-2019", "01-30 days", "Any notes to add"),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});



const InvoiceTable = () => {
    const [selected, setSelected] = React.useState([]);
    const classes = useStyles();

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.custName);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
    }
    const isSelected = (name) => selected.indexOf(name) !== -1;
    return (
        <TableContainer component={ Paper }>
            <Table className={ classes.table } stickyHeader aria-label="sticky table" >
                <TableHead onSelectAllClick={ handleSelectAllClick }>
                    <TableRow>
                        <StyledTableCell align="left" padding="checkbox">
                            <Checkbox
                            // checked={ isItemSelected }
                            // inputProps={ { 'aria-labelledby': labelId } }
                            />
                        </StyledTableCell>
                        <StyledTableCell align="left">Customer Name</StyledTableCell>
                        <StyledTableCell align="left">Customer #</StyledTableCell>
                        <StyledTableCell align="left">Invoice #</StyledTableCell>
                        <StyledTableCell align="left">Invoice Amount (g)</StyledTableCell>
                        <StyledTableCell align="right">Due Date (g)</StyledTableCell>
                        <StyledTableCell align="left">Predicted Payment Date (g)</StyledTableCell>
                        <StyledTableCell align="left">Predicted Aging Bucket (g)</StyledTableCell>
                        <StyledTableCell align="left">Notes (g)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { rows.map((row, index) => {
                        const isItemSelected = isSelected(row.custName)
                        const labelId = `enhanced-table-checkbox-${index}`
                        return (
                            <StyledTableRow hover key={ row.custName }
                                onClick={ (event) => handleClick(event, row.custName) }
                                role="checkbox"
                                aria-checked={ isItemSelected }
                                tabIndex={ -1 }
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
                                <StyledTableCell align="right">{ row.dueDate }</StyledTableCell>
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
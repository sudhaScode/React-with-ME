import React from "react";
import './MaterialGeneration.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function GridLayout(props) {
    const { row, columns } = props;
    const tableRow = Array.from({ length: row }).fill(null)
    const tableColumn = Array.from({ length: columns }).fill(null)
    //console.log(tableRow, tableColumn)
    return (
        <div className="grid-container">

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableBody>
                        {Array.from({ length: row }).map((_, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {tableColumn.map((_, indexName) => (<TableCell key={`${index}-${indexName}`} component="th" scope="row">
                                    0
                                </TableCell>))}

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}
export default GridLayout;
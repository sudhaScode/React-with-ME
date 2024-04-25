import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './MaterialGeneration.css';
import Button from '@mui/material/Button';
import GridLayout from './gridLayout'

function MetricsGenration() {
    const [rowInput, setRowInput] = useState(2);
    const [columnInput, setColumnInput] = useState(2);
    const [grid, setGrid] = useState(false);
    function debounce(fn, delay) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn(...args);
            }, delay);
        };
    }
    const inputHanlder = debounce((event) => {
        setGrid(false);
        if (event.target.name === "row") {
            setRowInput(event.target.value);
        }
        else {
            setColumnInput(event.target.value);
        }
    }, 200);
    const submitHandler = (event) => {
        setGrid(true);
    }

    return (
        <div>
            <FormGroup>
                <Box component="form"
                    noValidate
                    autoComplete="off"
                    className="form-container"
                >
                    <TextField id="outlined-basic" variant="outlined" name="row" label="number of rows" type="Number" required helperText="Please enter minimum two rows" sx={{}} margin="normal" onChange={inputHanlder} fullWidth />
                    <TextField id="outlined-basic" name="column" label="number of columns" type="Number" variant="outlined" required helperText="Please enter minimum two columns" sx={{}} margin="normal" onChange={inputHanlder} fullWidth />

                </Box>
                <Button variant="contained" onClick={submitHandler}>Generate Matrix</Button>
            </FormGroup >
            {grid && <GridLayout row={rowInput} columns={columnInput} />}
        </div>
    );
}
export default MetricsGenration;
import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

export const CounterButton = ({ counter, setCounter }) => {
    return (
        <React.Fragment>
            <p>Inside button counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>
                Add counter +
            </button>
        </React.Fragment>
    );
};

const CounterColumn = ({ increment }) => {
    const handleClick = () => {
        console.log('increment in ' + increment);
    };
    return (
        <Grid item>
            <Button variant="outlined" onClick={() => handleClick()}>
                Add {increment} +
            </Button>
        </Grid>
    );
};

const CounterRow = ({ increment }) => {
    return (
        <Grid container spacing={2}>
            <CounterColumn increment={increment} />
            <CounterColumn increment={increment + 1} />
            <CounterColumn increment={increment + 2} />
        </Grid>
    );
};

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <React.Fragment>
            <Typography variant="body1">Contador: {counter}</Typography>

            <CounterRow increment={0} />
            <br />
            <CounterRow increment={3} />
            <br />
            <CounterRow increment={6} />
        </React.Fragment>
    );
};

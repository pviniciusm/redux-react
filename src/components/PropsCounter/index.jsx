import { Button, Divider, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

const CounterButton = ({ counter, setCounter }) => {
    return (
        <React.Fragment>
            <p>Inside button counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>
                Add counter +
            </button>
        </React.Fragment>
    );
};

const CounterColumn = ({ increment, setCounter }) => {
    const handleClick = () => {
        console.log('increment in ' + increment);
        setCounter(increment);
    };
    return (
        <Grid item>
            <Button variant="outlined" onClick={() => handleClick()}>
                Add {increment} +
            </Button>
        </Grid>
    );
};

const CounterRow = ({ increment, setCounter }) => {
    console.log('[Render] PropsCounter Row [' + increment + ']');

    return (
        <Grid container spacing={2}>
            <CounterColumn increment={increment} setCounter={setCounter} />
            <CounterColumn increment={increment + 1} setCounter={setCounter} />
            <CounterColumn increment={increment + 2} setCounter={setCounter} />
        </Grid>
    );
};

export const PropsCounter = () => {
    const [counter, setCounter] = useState(0);

    const handleChange = (increment) => {
        setCounter(counter + increment);
    };

    console.log('[Render] PropsCounter');
    return (
        <React.Fragment>
            <Typography variant="body1">Contador: {counter}</Typography>

            <Divider />
            <br />

            <CounterRow increment={0} setCounter={handleChange} />
            <br />
            <CounterRow increment={3} setCounter={handleChange} />
            <br />
            <CounterRow increment={6} setCounter={handleChange} />
        </React.Fragment>
    );
};

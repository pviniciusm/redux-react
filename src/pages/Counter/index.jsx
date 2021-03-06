import { Card, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Counter } from '../../components/Counter';
import { PropsCounter } from '../../components/PropsCounter';

const counters = [
    { name: 'Local state', element: <Counter /> },
    { name: 'Local state with props', element: <PropsCounter /> },
    // { name: 'Redux state', element: <ReduxCounter /> },
];

const MyCard = ({ counter, setCounter }) => {
    const handleClick = () => {
        setCounter(counter + 1);
    };

    return (
        <React.Fragment>
            {counter}
            <button onClick={handleClick}>Add counter</button>
        </React.Fragment>
    );
};

export const CounterPage = () => {
    const [counter, setCounter] = useState(0);

    return (
        <React.Fragment>
            <Box>
                <Typography variant="h4">Exemplo - Counter</Typography>
            </Box>
            <Divider sx={{ margin: '10px 0' }} />

            <MyCard counter={counter} setCounter={setCounter} />

            {counters.map((item, index) => (
                <Card
                    elevation={3}
                    key={`counter_component_${index}`}
                    sx={{
                        marginBottom: '30px',
                        overflow: 'hidden',
                        padding: '20px',
                    }}
                >
                    <Box>
                        <Typography variant="h5">{item.name}</Typography>
                    </Box>
                    <Box>{item.element}</Box>

                    <Divider />
                </Card>
            ))}
        </React.Fragment>
    );
};

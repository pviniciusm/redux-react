import { Button, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const buttons = [
    { name: 'Counter', path: '/counter' },
    { name: 'E-Commerce', path: '/commerce' },
    { name: 'E-Commerce with props', path: '/commerce-props' },
];

export const HomePage = () => {
    return (
        <React.Fragment>
            <h1>Menu de componentes</h1>
            <br />

            <Grid container spacing={3} justifyContent={'center'}>
                {buttons.map((item, index) => (
                    <Grid key={`item_buttom_${index}`} item>
                        <Button variant="contained">
                            <Link to={item.path}>{item.name}</Link>
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    );
};

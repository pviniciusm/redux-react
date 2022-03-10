import { createTheme } from '@mui/material';
import { blue, orange } from '@mui/material/colors';

export const mainTheme = createTheme({
    palette: {
        background: {},
        primary: {
            main: blue.A200,
        },
        myColor: {
            main: orange.A200,
        },
    },
    typography: {
        h3: {
            fontSize: 30,
        },
        body2: {
            color: '#222',
            fontWeight: 'bold',
            padding: '5px 10px',
        },
        title: {
            color: '#222',
            fontWeight: 'bold',
            fontFamily: 'Montserrat, Lato, Roboto, sans-serif',
            fontSize: '2rem',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    margin: 0,
                    padding: 0,
                },
                body: {
                    height: '100vh',
                    width: '100vw',
                    overflow: 'hidden',
                    overflowY: 'auto',
                },
                '#root': {
                    overflow: 'hidden',
                },
            },
        },
    },
});

import { createTheme } from '@mui/material';
import { green } from '@mui/material/colors';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {},
        primary: {
            main: green.A100,
        },
    },
    typography: {
        h3: {
            fontSize: 30,
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
                },
            },
        },
    },
});

import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { mainTheme } from './config/theme/main';
import { Router } from './Router';
import { MainLayout } from './config/layout/main';

function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={mainTheme}>
                <CssBaseline />
                <MainLayout>
                    <Router></Router>
                </MainLayout>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;

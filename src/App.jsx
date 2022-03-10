import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { mainTheme } from './config/theme/main';
import { Router } from './Router';
import { MainLayout } from './config/layout/main';
import { Provider } from 'react-redux';
import { store, persistor } from './store';

import { PersistGate } from 'redux-persist/integration/react';

function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={mainTheme}>
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <CssBaseline />
                        <MainLayout>
                            <Router></Router>
                        </MainLayout>
                    </PersistGate>
                </Provider>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;

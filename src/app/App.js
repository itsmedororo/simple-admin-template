import React from 'react';
import { ThemeProvider } from 'styled-components';
import store from '@store';
import { Provider } from 'react-redux';
import { Routes } from '@router';
import Boot from './boot';
import {
    lightTheme,
    GlobalStyles,
} from '@theme';

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyles />
                <Routes />
            </ThemeProvider>
        </Provider>
    );
}

Boot()
    .then(() => { })
    .catch(error => console.error(error));

export default App;

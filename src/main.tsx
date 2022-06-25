import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

import App from './App';
import { mantineTheme } from './constants/theme';

import './index.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider withNormalizeCSS theme={mantineTheme}>
            <App />
        </MantineProvider>
    </React.StrictMode>,
);

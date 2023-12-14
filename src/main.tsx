import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import { ThemeProvider } from 'styled-components';
import { defaulTheme } from './styles/themes/default.ts';
import { GlobalStyles } from './styles/global.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaulTheme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);

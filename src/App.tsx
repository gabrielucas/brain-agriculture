import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

import { defaulTheme } from './styles/themes/default';
import { GlobalStyles } from './styles/global';
import { Modal } from './components/Modal';
import { Router } from './components/pages/Router';
import { ModalProvider } from './components/Modal/context/ModalProvider';

const defaultMuiTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <MuiThemeProvider theme={defaultMuiTheme}>
        <ModalProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <Modal />
        </ModalProvider>
        <GlobalStyles />
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;

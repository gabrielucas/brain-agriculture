import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

import { Router } from './routes';
import { Modal } from './components/organisms/Modal';
import { FarmProvider } from './contexts/useFarmContext/FarmProvider';
import { ModalProvider } from './contexts/useModalContext/ModalProvider';

import { GlobalStyles } from './styles/global';
import { defaulTheme } from './styles/themes/default';

const defaultMuiTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <MuiThemeProvider theme={defaultMuiTheme}>
        <FarmProvider>
          <ModalProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
            <Modal />
          </ModalProvider>
        </FarmProvider>
        <GlobalStyles />
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;

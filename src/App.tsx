import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

import { defaulTheme } from './styles/themes/default';
import { GlobalStyles } from './styles/global';
import { Modal } from './components/Modal';
import { Router } from './routes';
import { ModalProvider } from './components/Modal/context/ModalProvider';
import { FarmProvider } from './contexts/useFarmContext/FarmProvider';

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

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

import { Router } from './pages/Router';
import { defaulTheme } from './styles/themes/default';
import { GlobalStyles } from './styles/global';

const defaultMuiTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <MuiThemeProvider theme={defaultMuiTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyles />
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;

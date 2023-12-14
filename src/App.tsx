import { ThemeProvider } from 'styled-components';
import { Router } from './pages/Router';
import { defaulTheme } from './styles/themes/default';
import { GlobalStyles } from './styles/global';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;

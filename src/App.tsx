import { BrowserRouter } from 'react-router-dom';

import { Router } from './routes';
import { MainProvider } from './MainProvider';

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;

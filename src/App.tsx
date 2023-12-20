import { BrowserRouter } from 'react-router-dom';

import { Router } from './routes';
import { DefaulProviders } from './DefaultProviders';

function App() {
  return (
    <DefaulProviders>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </DefaulProviders>
  );
}

export default App;

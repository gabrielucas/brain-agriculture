import { FC } from 'react';

import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

import { Modal } from './components/organisms/Modal';
import { FarmProvider } from './contexts/useFarmContext/FarmProvider';
import { ModalProvider } from './contexts/useModalContext/ModalProvider';

import { GlobalStyles } from './styles/global';
import { defaulTheme } from './styles/themes/default';

const defaultMuiTheme = createTheme();

type DefaulProvidersProps = {
  children?: React.ReactNode;
};

export const DefaulProviders: FC<DefaulProvidersProps> = ({ children }) => (
  <ThemeProvider theme={defaulTheme}>
    <MuiThemeProvider theme={defaultMuiTheme}>
      <FarmProvider>
        <ModalProvider>
          {children}
          <Modal />
        </ModalProvider>
      </FarmProvider>
      <GlobalStyles />
    </MuiThemeProvider>
  </ThemeProvider>
);

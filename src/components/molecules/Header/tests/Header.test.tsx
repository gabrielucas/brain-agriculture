import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { Header } from '..';
import { DataTestId } from '../../../../test/enums';

const defaultWrapper = ({ children }: { children: ReactNode }) => <MemoryRouter>{children}</MemoryRouter>;

describe('Given the <Header /> component', () => {
  describe('When the component is rendered', () => {
    test('Then check if it is displayed on screen', () => {
      const { getByTestId } = render(<Header />, { wrapper: defaultWrapper });

      const HeaderComponent = getByTestId(DataTestId.HEADER_CONTAINER);
      const LinkToRedirectHome = getByTestId(DataTestId.LINK_TO_HOME);
      const LinkToRedirectDashboard = getByTestId(DataTestId.LINK_TO_DASHBOARD);

      expect(HeaderComponent).toBeInTheDocument();
      expect(LinkToRedirectHome).toBeInTheDocument();
      expect(LinkToRedirectDashboard).toBeInTheDocument();
    });

    test('Then it should display an image on screen', () => {
      const { getByAltText } = render(<Header />, { wrapper: defaultWrapper });

      const LogoComponent = getByAltText('Logomarca da Brain Agriculture');

      expect(LogoComponent).toBeInTheDocument();
    });
  });
});

import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Agriculture, Analytics } from '@mui/icons-material';

import { HeaderContainer } from './styles';
import Logo from '../../../assets/logo.png';

import { DataTestId } from '../../../test/enums';

export const Header: FC = () => {
  return (
    <HeaderContainer data-testid={DataTestId.HEADER_CONTAINER}>
      <img src={Logo} alt="Logomarca da Brain Agriculture" />
      <nav>
        <NavLink data-testid={DataTestId.LINK_TO_HOME} to={'/'} title="Fazendas">
          <Agriculture fontSize="large" />
        </NavLink>
        <NavLink data-testid={DataTestId.LINK_TO_DASHBOARD} to={'/dashboard'} title="Dados">
          <Analytics fontSize="large" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};

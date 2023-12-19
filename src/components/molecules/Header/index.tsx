import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Agriculture, Analytics } from '@mui/icons-material';

import { HeaderContainer } from './styles';
import Logo from '../../../assets/logo.png';

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logomarca da Brain Agriculture" />
      <nav>
        <NavLink to={'/'} title="Fazendas">
          <Agriculture fontSize="large" />
        </NavLink>
        <NavLink to={'/dashboard'} title="Dados">
          <Analytics fontSize="large" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};

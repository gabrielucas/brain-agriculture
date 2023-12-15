import { FC } from 'react';
import { HeaderContainer } from './styles';
import { NavLink } from 'react-router-dom';
import { Agriculture, Analytics } from '@mui/icons-material';

export const Header: FC = () => {
  return (
    <HeaderContainer>
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

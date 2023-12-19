import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { DefaultLayoutContainer } from './styles';
import { Header } from '../components/molecules/Header';

export const DefaultLayout: FC = () => {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  );
};

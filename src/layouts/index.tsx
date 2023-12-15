import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { DefaultLayoutContainer } from './styles';
import { Header } from '../components/Header';

export const DefaultLayout: FC = () => {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  );
};

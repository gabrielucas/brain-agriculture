import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../molecules/Header';

import { DefaultLayoutContainer } from './styles';

export const DefaultLayout: FC = () => {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  );
};

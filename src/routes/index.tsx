import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Farm } from '../components/pages/Farm';
import { DefaultLayout } from '../components/layouts';
import { Dashboard } from '../components/pages/Dashboard';

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Farm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

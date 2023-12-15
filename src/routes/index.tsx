import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Dashboard } from '../components/pages/Dashboard';
import { Farm } from '../components/pages/Farm';
import { DefaultLayout } from '../layouts';

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

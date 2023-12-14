import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Dashboard } from './Dashboard';
import { Farm } from './Farm';

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Farm />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

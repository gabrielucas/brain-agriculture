import { useContext } from 'react';
import { FarmContext } from './FarmContext';

export const useFarmContext = () => {
  const context = useContext(FarmContext);

  if (!context) throw new Error('The useFarmContext hook must be used within FarmProvider');

  return context;
};

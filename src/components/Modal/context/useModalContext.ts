import { useContext } from 'react';
import { ModalContext } from './ModalContext';

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) throw new Error('useModalContext must be used with a ModalProvider');

  return context;
};

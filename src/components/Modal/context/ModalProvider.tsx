import { FC, ReactNode, useState } from 'react';
import { ModalContext } from './ModalContext';
import { IModalConfig, IModalProps } from './types/interfaces';
import { INITIAL_MODAL_CONFIG } from './constants';

export const ModalProvider: FC<IModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<IModalConfig>(INITIAL_MODAL_CONFIG);
  const [ModalContent, setModalContent] = useState<ReactNode>(<div />);

  const openModal = (newConfig?: IModalConfig) => {
    if (modalConfig) setModalConfig((modalConfig) => ({ ...modalConfig, newConfig }));
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ open: isOpen, closeModal, openModal, ModalContent, setModalContent, modalConfig }}>
      {children}
    </ModalContext.Provider>
  );
};

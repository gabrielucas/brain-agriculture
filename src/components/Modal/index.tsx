import { FC, useCallback } from 'react';

import { ModalBox, ModalContent, ModalHeader, ModalWrapper } from './styles';
import { Button } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useModalContext } from './context/useModalContext';
import { IModalProps } from './context/types/interfaces';

export const Modal: FC<IModalProps> = ({ children }) => {
  const { open, closeModal, modalConfig } = useModalContext();

  const handleOnClose = useCallback(() => {
    if (modalConfig?.isClosableOverlay) closeModal();
  }, [closeModal, modalConfig?.isClosableOverlay]);

  return (
    <ModalWrapper open={open} onClose={handleOnClose}>
      <ModalBox>
        <ModalHeader>
          <Button onClick={closeModal}>
            <Close />
          </Button>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalBox>
    </ModalWrapper>
  );
};

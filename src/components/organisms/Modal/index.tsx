import { FC, useCallback } from 'react';
import { Button } from '@mui/material';
import { Close } from '@mui/icons-material';

import { useModalContext } from '../../../contexts/';

import { ModalBox, ModalContentBox, ModalHeader, ModalWrapper } from './styles';
export const Modal: FC = () => {
  const { open, closeModal, modalConfig, ModalContent } = useModalContext();

  const handleOnClose = useCallback(() => {
    if (modalConfig?.isClosableOverlay) closeModal();
  }, [closeModal, modalConfig?.isClosableOverlay]);

  return (
    <ModalWrapper open={open} onClose={handleOnClose}>
      <ModalBox width={modalConfig?.width} height={modalConfig?.height}>
        <ModalHeader>
          <Button onClick={closeModal}>
            <Close />
          </Button>
        </ModalHeader>
        <ModalContentBox>{ModalContent}</ModalContentBox>
      </ModalBox>
    </ModalWrapper>
  );
};

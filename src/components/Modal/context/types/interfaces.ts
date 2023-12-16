import { ReactElement, ReactNode } from 'react';

interface IModalConfig {
  width?: string;
  height?: string;
  isClosableOverlay?: boolean;
}

interface IModalContext {
  open: boolean;
  openModal(newConfig?: IModalConfig): void;
  closeModal(): void;
  ModalContent: ReactNode;
  setModalContent(content: ReactElement): void;
  modalConfig?: IModalConfig;
}

interface IModalProps {
  children?: ReactNode;
}

export type { IModalConfig, IModalContext, IModalProps };

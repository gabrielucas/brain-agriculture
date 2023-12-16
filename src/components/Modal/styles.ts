import { Box, Modal } from '@mui/material';
import { styled } from 'styled-components';
import { IModalConfig } from './context/types/interfaces';

type ModalBoxConfigProps = Omit<IModalConfig, 'isClosableOverlay'>;

const ModalWrapper = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled(Box)<ModalBoxConfigProps>`
  min-width: 50vw;
  width: ${({ width }) => (width ? width : 'auto')};

  max-height: 96vh;
  height: ${({ height }) => (height ? height : 'auto')};

  padding: 1rem;
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme['--gray-100']};
  border-radius: 8px;

  outline: none;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme['--md']}) {
    width: calc(100vw - 32px);
  }
`;

const ModalHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;

  button {
    color: ${({ theme }) => theme['--green-700']};
    min-width: 0;
    width: 2.25rem;
  }
`;

const ModalContentBox = styled.div`
  width: 100%;
`;

export { ModalBox, ModalContentBox, ModalHeader, ModalWrapper };

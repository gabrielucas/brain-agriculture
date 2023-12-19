import { FC, useCallback } from 'react';

import { FarmContainer } from './styles';
import { Add } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { useModalContext } from '../../../contexts/useModalContext/useModalContext';
import { FarmList } from '../../FarmList';
import { FarmForm } from '../../FarmForm';
import { Button } from '../../atoms/Button';

export const Farm: FC = () => {
  const { openModal, setModalContent } = useModalContext();

  const handleVisibilityModal = useCallback(() => {
    setModalContent(<FarmForm />);
    openModal();
  }, [setModalContent, openModal]);

  return (
    <FarmContainer>
      <Button onClick={handleVisibilityModal} variant="contained" size="small">
        <Add />
        Novo cadastro
      </Button>
      <Divider flexItem />
      <FarmList />
    </FarmContainer>
  );
};

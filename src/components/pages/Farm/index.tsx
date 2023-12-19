import { FC, useCallback } from 'react';
import { Divider } from '@mui/material';
import { Add } from '@mui/icons-material';

import { Button } from '../../atoms/Button';
import { FarmList } from '../../molecules/FarmList';
import { FarmForm } from '../../organisms/FarmForm';
import { useModalContext } from '../../../contexts/useModalContext';

import { FarmContainer } from './styles';

export const Farm: FC = () => {
  const { openModal, setModalContent } = useModalContext();

  const handleVisibilityModal = useCallback(() => {
    setModalContent(<FarmForm farm={null} />);
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

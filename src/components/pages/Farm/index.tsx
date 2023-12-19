import { FC, useCallback } from 'react';
import { Divider } from '@mui/material';
import { Add } from '@mui/icons-material';

import { Button } from '../../atoms/Button';
import { FarmList } from '../../molecules/FarmList';
import { FarmForm } from '../../organisms/FarmForm';
import { useModalContext } from '../../../contexts/useModalContext';

import { PageContainer } from '../common/styles';

export const Farm: FC = () => {
  const { openModal, setModalContent } = useModalContext();

  const handleVisibilityModal = useCallback(() => {
    setModalContent(<FarmForm />);
    openModal();
  }, [setModalContent, openModal]);

  return (
    <PageContainer>
      <Button onClick={handleVisibilityModal} variant="contained" size="small">
        <Add />
        Novo cadastro
      </Button>
      <Divider flexItem />
      <FarmList />
    </PageContainer>
  );
};

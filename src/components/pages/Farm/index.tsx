import { FC } from 'react';

import { AddNewFarmButton, FarmContainer } from './styles';
import { Add } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { useModalContext } from '../../Modal/context/useModalContext';
import { FarmList } from '../../FarmList';

export const Farm: FC = () => {
  const { openModal } = useModalContext();

  return (
    <FarmContainer>
      <AddNewFarmButton onClick={openModal} variant="contained" size="small">
        <Add />
        Novo cadastro
      </AddNewFarmButton>
      <Divider flexItem />
      <FarmList />
    </FarmContainer>
  );
};

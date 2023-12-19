import { FC, memo, useCallback } from 'react';

import { Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

import { IListItemProps } from './interfaces/IListItemProps';

import { ListItemContent, ListItemContainer, ListItemActionBox } from './styles';
import { useModalContext } from '../../../contexts/useModalContext/useModalContext';
import { FarmForm } from '../../FarmForm';
import { useFarmContext } from '../../../contexts/useFarmContext/useFarmContext';

const ListItem: FC<IListItemProps> = ({ farm }) => {
  const { openModal, setModalContent } = useModalContext();
  const { setFarms } = useFarmContext();

  const openFormToEdition = useCallback(() => {
    setModalContent(<FarmForm farm={farm} />);
    openModal();
  }, [farm, openModal, setModalContent]);

  const deleteFarm = useCallback(
    (farmId: string | number) => {
      setFarms((farms) => farms.filter((farm) => farm.id !== farmId));
    },
    [setFarms],
  );

  return (
    <ListItemContainer>
      <ListItemContent>
        <strong>{farm.name}</strong>
        <span>
          <i>{farm.farmer}</i>
        </span>
      </ListItemContent>
      <ListItemActionBox>
        <Button onClick={openFormToEdition} title="Editar cadastro">
          <Edit fontSize="small" />
        </Button>
        <Button onClick={() => deleteFarm(farm.id)} title="Excluir cadastro">
          <Delete fontSize="small" />
        </Button>
      </ListItemActionBox>
    </ListItemContainer>
  );
};

export const FarmListItem = memo(ListItem);

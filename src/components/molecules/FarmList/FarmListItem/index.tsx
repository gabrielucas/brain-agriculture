import { FC, memo, useCallback } from 'react';

import { Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

import { FarmForm } from '../../../organisms/FarmForm';
import { IListItemProps } from './interfaces/IListItemProps';
import { useFarmContext, useModalContext } from '../../../../contexts';

import { ListItemContent, ListItemContainer, ListItemActionBox } from './styles';

const ListItem: FC<IListItemProps> = ({ farm }) => {
  const { openModal, setModalContent } = useModalContext();
  const { deleteFarm } = useFarmContext();

  const openFormToEdition = useCallback(() => {
    setModalContent(<FarmForm farm={farm} />);
    openModal();
  }, [farm, openModal, setModalContent]);

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

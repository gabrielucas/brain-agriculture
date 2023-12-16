import { FC, memo } from 'react';

import { ListItemContent, ListItemContainer, ListItemActionBox } from './styles';
import { Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const ListItem: FC = () => {
  return (
    <ListItemContainer>
      <ListItemContent>
        <strong>Fazenda Dona Inês</strong>
        <span>
          <i>Alceu de Almeida Ferreira</i>
        </span>
      </ListItemContent>
      <ListItemActionBox>
        <Button title="Editar cadastro">
          <Edit fontSize="small" />
        </Button>
        <Button title="Excluir cadastro">
          <Delete fontSize="small" />
        </Button>
      </ListItemActionBox>
    </ListItemContainer>
  );
};

export const FarmListItem = memo(ListItem);

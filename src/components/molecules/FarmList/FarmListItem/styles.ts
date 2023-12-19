import { Box, ListItem } from '@mui/material';
import { styled } from 'styled-components';

const ListItemContainer = styled(ListItem)`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: ${({ theme }) => theme['--green-600']};

  justify-content: space-between;
  color: ${({ theme }) => theme['--white']};
`;

const ListItemContent = styled(Box)`
  strong {
    display: block;
    font-size: 0.875rem;
  }

  span {
    font-size: 0.75rem;
  }
`;

const ListItemActionBox = styled(Box)`
  display: flex;
  gap: 0.5rem;

  button {
    color: ${({ theme }) => theme['--white']};
    min-width: 0;
    width: 2.25rem;
  }

  button:last-child {
    color: ${({ theme }) => theme['--danger']};
  }
`;

export { ListItemActionBox, ListItemContainer, ListItemContent };

import { Button } from '@mui/material';
import { styled } from 'styled-components';

const FarmContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 1rem;
  border-radius: 8px;

  background: ${({ theme }) => theme['--amber']};
`;

const AddNewFarmButton = styled(Button)`
  text-transform: initial;
  font-weight: 700;
  gap: 0.5rem;

  background: ${({ theme }) => theme['--green-700']};

  &:hover {
    background: ${({ theme }) => theme['--green-800']};
  }
`;

export { AddNewFarmButton, FarmContainer };

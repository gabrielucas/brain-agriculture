import { Button } from '@mui/material';
import { styled } from 'styled-components';

export const DefaultStyledButton = styled(Button)`
  text-transform: initial;
  font-weight: 700;
  gap: 0.5rem;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme['--green-700']};

  &:hover {
    background: ${({ theme }) => theme['--green-800']};
  }
`;

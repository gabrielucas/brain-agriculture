import { Box } from '@mui/material';
import { styled } from 'styled-components';

const ChartsContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  grid-gap: 2rem;
  width: 100%;

  @media (max-width: ${({ theme }) => theme['--md']}) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export { ChartsContainer };

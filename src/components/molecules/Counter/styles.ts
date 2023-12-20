import { Box } from '@mui/material';
import styled from 'styled-components';

const CounterBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme['--md']}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const CounterContainer = styled(Box)`
  display: flex;
  gap: 0.5rem;

  & > strong {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme['--green-600']};
  }

  & .counter {
    background: ${({ theme }) => theme['--green-800']};
    padding: 0.125rem 0.5rem;

    font-size: 0.875rem;
    font-weight: 700;
    color: ${({ theme }) => theme['--white']};

    border-radius: 999px;

    display: flex;
    align-items: center;
  }
`;

export { CounterBox, CounterContainer };

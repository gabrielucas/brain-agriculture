import { Box } from '@mui/material';
import { PieChart } from 'recharts';
import styled from 'styled-components';

const PieChartContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.5rem;
`;

const PieChartTitle = styled.h3`
  color: ${({ theme }) => theme['--green-700']};
  font-size: 1.5rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme['--md']}) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const PieRecharts = styled(PieChart)`
  align-self: center;
`;

export { PieChartContainer, PieChartTitle, PieRecharts };

import { FC, useMemo } from 'react';
import { Cell, Pie, Tooltip, Legend } from 'recharts';
import { PieChartContainer, PieChartTitle, PieRecharts } from './styles';
import { useScreenDimensions } from '../../../utils/useScreenDimensions';

interface IFarmsGroupByState {
  state: string;
  total: number;
}

const COLORS = ['#80c0ce', '#467292', '#9adea2', '#c2f69b'];

const farmsGroupedByState: IFarmsGroupByState[] = [
  {
    state: 'SP',
    total: 5,
  },
  {
    state: 'RJ',
    total: 3,
  },
  {
    state: 'MG',
    total: 7,
  },
  {
    state: 'MT',
    total: 10,
  },
];

interface IPieChartProps {
  title: string;
}

export const PieChart: FC<IPieChartProps> = ({ title }) => {
  const { isMobile } = useScreenDimensions();

  const Chart = useMemo(
    () => (
      <PieRecharts height={isMobile ? 300 : 400} width={isMobile ? 300 : 400}>
        <Pie
          cx="50%"
          cy="50%"
          data={farmsGroupedByState}
          dataKey="total"
          fill="#8884d8"
          label
          nameKey="state"
          outerRadius={isMobile ? 100 : 130}
        >
          {farmsGroupedByState.map((__entry, index) => (
            <Cell
              key={`cell-${index + 1}`}
              fill={COLORS[index % COLORS.length]}
              onMouseOver={(event) => (event.currentTarget.style.outline = 'none')}
              onClick={(event) => (event.currentTarget.style.outline = 'none')}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieRecharts>
    ),
    [isMobile],
  );

  return (
    <PieChartContainer>
      <PieChartTitle>{title}</PieChartTitle>
      {Chart}
    </PieChartContainer>
  );
};

import { FC, useMemo } from 'react';
import { Cell, Pie, Tooltip, Legend } from 'recharts';

import { useScreenDimensions } from '../../../utils/useScreenDimensions';

import { PieChartContainer, PieChartTitle, PieRecharts } from './styles';
import { IPieChartProps } from './interfaces/IPieChartProps';

const COLORS = ['#80c0ce', '#467292', '#9adea2', '#c2f69b'];

export const PieChart: FC<IPieChartProps> = ({ title, data }) => {
  const { isMobile } = useScreenDimensions();

  const handleWithCellOutline = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event.currentTarget.style.outline = 'none';
  };

  const Chart = useMemo(
    () => (
      <PieRecharts height={isMobile ? 300 : 400} width={isMobile ? 300 : 400}>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          dataKey="value"
          fill="#8884d8"
          label
          nameKey="name"
          outerRadius={isMobile ? 100 : 130}
        >
          {data.map((__entry, index) => (
            <Cell
              key={`cell-${index + 1}`}
              fill={COLORS[index % COLORS.length]}
              onMouseOver={handleWithCellOutline}
              onClick={handleWithCellOutline}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieRecharts>
    ),
    [data, isMobile],
  );

  return (
    <PieChartContainer>
      <PieChartTitle>{title}</PieChartTitle>
      {Chart}
    </PieChartContainer>
  );
};

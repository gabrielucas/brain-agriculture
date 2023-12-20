import { FC, useMemo } from 'react';
import { Cell, Legend, Pie, Tooltip } from 'recharts';

import { IPieChartProps } from './interfaces/IPieChartProps';
import { useScreenDimensions } from '../../../utils/useScreenDimensions';

import { PieChartContainer, PieChartTitle, PieRecharts } from './styles';

export const PieChart: FC<IPieChartProps> = ({ title, data, colorDictionary }) => {
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
          outerRadius={isMobile ? 80 : 130}
        >
          {data.map(({ name }, index) => (
            <Cell
              fill={colorDictionary ? colorDictionary[name] : '#8884d8'}
              key={`cell-${index + 1}`}
              onMouseOver={handleWithCellOutline}
              onClick={handleWithCellOutline}
              stroke=""
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieRecharts>
    ),
    [colorDictionary, data, isMobile],
  );

  return (
    <PieChartContainer>
      <PieChartTitle>{title}</PieChartTitle>
      {Chart}
    </PieChartContainer>
  );
};

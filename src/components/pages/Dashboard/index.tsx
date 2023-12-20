import { FC } from 'react';

import { Counter } from '../../molecules/Counter';

import { PageContainer } from '../common/styles';
import { PieChart } from '../../molecules/PieChart';
import { ChartsContainer } from './styles';

export const Dashboard: FC = () => {
  return (
    <PageContainer>
      <Counter />
      <ChartsContainer>
        <PieChart title="Total de fazendas por estado" />
        <PieChart title="Total de fazendas por cultura" />
        <PieChart title="Total de fazendas por uso do solo" />
      </ChartsContainer>
    </PageContainer>
  );
};

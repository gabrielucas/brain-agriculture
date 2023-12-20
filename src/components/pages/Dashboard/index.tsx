import { FC } from 'react';

import { Counter } from '../../molecules/Counter';

import { PageContainer } from '../common/styles';
import { PieChart } from '../../organisms/PieChart';
import { ChartsContainer } from './styles';
import { useFarmContext } from '../../../contexts';
import { useReduceFarmList } from '../../organisms/PieChart/hooks/useReduceFarmList';

export const Dashboard: FC = () => {
  const { farms } = useFarmContext();
  const { totalFarmNumberByState } = useReduceFarmList({ farms });

  return (
    <PageContainer>
      <Counter />
      <ChartsContainer>
        <PieChart data={totalFarmNumberByState} title="Total de fazendas por estado" />
        <PieChart data={totalFarmNumberByState} title="Total de fazendas por cultura" />
        <PieChart data={totalFarmNumberByState} title="Total de fazendas por uso do solo" />
      </ChartsContainer>
    </PageContainer>
  );
};

import { FC } from 'react';

import { Counter } from '../../molecules/Counter';

import { PieChart } from '../../organisms/PieChart';
import { useFarmContext } from '../../../contexts';
import { useReduceFarmList } from '../../organisms/PieChart/hooks/useReduceFarmList';
import { COLORS_BY_CROP, COLORS_BY_STATE, COLORS_TO_LAND_USE_DATA } from '../../organisms/PieChart/constants';

import { ChartsContainer } from './styles';
import { PageContainer } from '../common/styles';

export const Dashboard: FC = () => {
  const { farms } = useFarmContext();
  const { landUseData, totalFarmsNumberByState, totalFarmsNumberByCrop } = useReduceFarmList({ farms });

  return (
    <PageContainer>
      <Counter />
      <ChartsContainer>
        <PieChart
          colorDictionary={COLORS_BY_STATE}
          data={totalFarmsNumberByState}
          title="Total de fazendas por estado"
        />
        <PieChart
          colorDictionary={COLORS_BY_CROP}
          data={totalFarmsNumberByCrop}
          title="Total de fazendas por plantio de cultura"
        />
        <PieChart colorDictionary={COLORS_TO_LAND_USE_DATA} data={landUseData} title="Uso do solo" />
      </ChartsContainer>
    </PageContainer>
  );
};

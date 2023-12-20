import { useMemo } from 'react';

import { IChartData } from '../interfaces/ICharData';
import { groupFarmsByState } from '../helpers/groupByState';
import { IFarm } from '../../../../contexts/useFarmContext/interfaces/IFarm';

interface IUseReduceFarmListProps {
  farms: IFarm[];
}

export const useReduceFarmList = ({ farms }: IUseReduceFarmListProps) => {
  const totalFarmNumberByState = useMemo(() => {
    const farmsGroupByState = groupFarmsByState(farms);
    const farmsGroupByStateList: IChartData[] = [];

    for (const state in farmsGroupByState) {
      farmsGroupByStateList.push({
        name: state,
        value: farmsGroupByState[state].length,
      });
    }

    return farmsGroupByStateList;
  }, [farms]);

  return {
    totalFarmNumberByState,
  };
};

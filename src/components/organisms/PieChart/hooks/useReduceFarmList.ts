import { useMemo } from 'react';

import { IChartData } from '../interfaces/ICharData';
import { groupFarmsByCrop } from '../helpers/groupFarmsByCrop';
import { groupFarmsByState } from '../helpers/groupFarmsByState';
import { IUseReduceFarmList } from './interfaces/IUseReduceFarmList';
import { IUseReduceFarmListProps } from './interfaces/IUseReduceFarmListProps';

export const useReduceFarmList = ({ farms }: IUseReduceFarmListProps): IUseReduceFarmList => {
  const totalFarmsNumberByState = useMemo(() => {
    const farmsGroupByState = groupFarmsByState(farms);
    const farmsListGroupedByState: IChartData[] = [];

    for (const state in farmsGroupByState) {
      farmsListGroupedByState.push({
        name: state,
        value: farmsGroupByState[state].length,
      });
    }

    return farmsListGroupedByState;
  }, [farms]);

  const totalFarmsNumberByCrop = useMemo(() => {
    const farmsGroupByCrop = groupFarmsByCrop(farms);
    const farmsListGroupedByCrop: IChartData[] = [];

    for (const crop in farmsGroupByCrop) {
      farmsListGroupedByCrop.push({
        name: crop,
        value: farmsGroupByCrop[crop].length,
      });
    }

    return farmsListGroupedByCrop;
  }, [farms]);

  const sumOfVegetationAreaOfAllFarms = useMemo(
    () => farms.reduce((totalSum, currentFarm) => totalSum + Number(currentFarm.vegetationArea), 0),
    [farms],
  );

  const sumOfArableAreaOfAllFarms = useMemo(
    () => farms.reduce((totalSum, currentFarm) => totalSum + Number(currentFarm.arableArea), 0),
    [farms],
  );

  const landUseData: IChartData[] = useMemo(
    () => [
      {
        name: 'Área agricultável',
        value: sumOfArableAreaOfAllFarms,
      },
      {
        name: 'Área de vegetação',
        value: sumOfVegetationAreaOfAllFarms,
      },
    ],
    [sumOfArableAreaOfAllFarms, sumOfVegetationAreaOfAllFarms],
  );

  return {
    landUseData,
    totalFarmsNumberByCrop,
    totalFarmsNumberByState,
  };
};

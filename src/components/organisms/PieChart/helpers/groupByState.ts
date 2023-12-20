import { IFarm } from '../../../../contexts/useFarmContext/interfaces/IFarm';
import { IFarmsGroupByState } from '../interfaces/IFarmsGroupByState';

export const groupFarmsByState = (farms: IFarm[]): IFarmsGroupByState => {
  const farmsGroupByState: IFarmsGroupByState = {};

  farms.forEach((farm) => {
    const { state } = farm;

    if (!farmsGroupByState[state]) {
      farmsGroupByState[state] = [];
    }

    farmsGroupByState[state].push(farm);
  });

  return farmsGroupByState;
};

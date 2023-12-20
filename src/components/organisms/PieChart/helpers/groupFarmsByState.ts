import { IFarm } from '../../../../contexts/useFarmContext/interfaces/IFarm';
import { IFarmsGroupBySpecificData } from '../interfaces/IFarmsGroupBySpecificData';

export const groupFarmsByState = (farms: IFarm[]): IFarmsGroupBySpecificData => {
  const farmsGroupByState: IFarmsGroupBySpecificData = {};

  farms.forEach((farm) => {
    const { state } = farm;

    if (!farmsGroupByState[state]) {
      farmsGroupByState[state] = [];
    }

    farmsGroupByState[state].push(farm);
  });

  return farmsGroupByState;
};

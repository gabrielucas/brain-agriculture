import { IFarm } from '../../../../contexts/useFarmContext/interfaces/IFarm';
import { IFarmsGroupBySpecificData } from '../interfaces/IFarmsGroupBySpecificData';

export const groupFarmsByCrop = (farms: IFarm[]): IFarmsGroupBySpecificData => {
  const farmsGroupByCrop: IFarmsGroupBySpecificData = {};

  farms.forEach((farm) => {
    const { crops } = farm;

    crops.forEach((crop) => {
      if (!farmsGroupByCrop[crop]) {
        farmsGroupByCrop[crop] = [];
      }

      farmsGroupByCrop[crop].push(farm);
    });
  });

  return farmsGroupByCrop;
};

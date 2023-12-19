import { IFarm } from './IFarm';

export interface IFarmContext {
  createNewFarm(newFarm: Omit<IFarm, 'id'>): void;
  deleteFarm(farmId: string | number): void;
  farms: IFarm[];
  updateFarm(farmToUpdate: IFarm): void;
}

import { IFarm } from './IFarm';

export interface IFarmContext {
  farms: IFarm[];
  setFarms: React.Dispatch<React.SetStateAction<IFarm[]>>;
}

import { IFarmData } from './IFarmData';

export interface IFarmContext {
  farmsData: IFarmData[];
  setFarmsData: React.Dispatch<React.SetStateAction<IFarmData[]>>;
}

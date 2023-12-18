import { IFarmData } from './IFarmData';

export interface IFarmContext {
  farmData: IFarmData | null;
  setFarmData: React.Dispatch<React.SetStateAction<IFarmData | null>>;
}

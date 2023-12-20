import { IFarm } from '../../../../contexts/useFarmContext/interfaces/IFarm';

export interface IFarmsGroupByState {
  [key: string]: IFarm[];
}

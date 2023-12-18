import { IFarm } from '../../../../contexts/useFarmContext/interfaces/IFarm';

export interface ICropsProps {
  setSelectedCrops: React.Dispatch<React.SetStateAction<string[]>>;
  farm?: IFarm;
}

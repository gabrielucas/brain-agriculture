import { IFarmFormBaseProps } from '../../../organisms/FarmForm/interfaces/IFarmFormBaseProps';

export interface ICropsProps extends IFarmFormBaseProps {
  plantedCrops: string[];
  setPlantedCrops: React.Dispatch<React.SetStateAction<string[]>>;
}

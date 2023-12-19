import { IFarmFormBaseProps } from '../../../organisms/FarmForm/interfaces/IFarmFormBaseProps';

export interface ICropsProps extends IFarmFormBaseProps {
  setSelectedCrops: React.Dispatch<React.SetStateAction<string[]>>;
}

import { ChangeEventHandler, FC, useCallback } from 'react';

import { cropsData } from '../../../data/crops';
import { CropsContainer, CropsFieldsBox } from './styles';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '../../atoms/Forms/Checkbox';

interface ICropsProps {
  setSelectedCrops: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Crops: FC<ICropsProps> = ({ setSelectedCrops }) => {
  const removeUnselectedCrop = useCallback(
    (cropName: string) => {
      setSelectedCrops((crops) => crops.filter((crop) => crop !== cropName));
    },
    [setSelectedCrops],
  );

  const handleSelectCrops: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const isChecked = event.target.checked;
      const cropName = event.target.value;

      if (!isChecked) {
        removeUnselectedCrop(cropName);
        return;
      }

      setSelectedCrops((crops) => [...crops, cropName]);
    },
    [removeUnselectedCrop, setSelectedCrops],
  );

  return (
    <CropsContainer>
      <span>Culturas plantadas:</span>
      <CropsFieldsBox>
        {cropsData.map((crop, index) => (
          <FormControlLabel
            key={crop.semanticalName}
            control={<Checkbox name={`crops[${index}]`} value={crop.name} onChange={handleSelectCrops} size="small" />}
            label={crop.name}
          />
        ))}
      </CropsFieldsBox>
    </CropsContainer>
  );
};

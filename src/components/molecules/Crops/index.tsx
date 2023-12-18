import { ChangeEventHandler, FC, useCallback } from 'react';
import { FormControlLabel } from '@mui/material';

import { cropsData } from '../../../data/crops';
import { Checkbox } from '../../atoms/Forms/Checkbox';

import { ICropsProps } from './interfaces/ICropsProps';

import { CropsContainer, CropsFieldsBox } from './styles';

export const Crops: FC<ICropsProps> = ({ setSelectedCrops, farm }) => {
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

  const handleWithAlreadyPlantedCrops = useCallback(
    (cropName: string) => {
      return farm?.crops.includes(cropName);
    },
    [farm?.crops],
  );

  return (
    <CropsContainer>
      <span>Culturas plantadas:</span>
      <CropsFieldsBox>
        {cropsData.map((crop, index) => (
          <FormControlLabel
            key={crop.semanticalName}
            control={
              <Checkbox
                checked={handleWithAlreadyPlantedCrops(crop.name)}
                name={`crops[${index}]`}
                value={crop.name}
                onChange={handleSelectCrops}
                size="small"
              />
            }
            label={crop.name}
          />
        ))}
      </CropsFieldsBox>
    </CropsContainer>
  );
};

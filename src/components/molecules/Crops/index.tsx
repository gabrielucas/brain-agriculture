import { ChangeEventHandler, FC, useCallback, useEffect } from 'react';
import { FormControlLabel } from '@mui/material';

import { cropsData } from '../../../data/crops';
import { Checkbox } from '../../atoms/Forms/Checkbox';

import { ICropsProps } from './interfaces/ICropsProps';

import { CropsContainer, CropsFieldsBox } from './styles';

export const Crops: FC<ICropsProps> = ({ plantedCrops, setPlantedCrops, farm }) => {
  const removeUnselectedCrop = useCallback(
    (cropName: string) => {
      setPlantedCrops((crops) => crops.filter((crop) => crop !== cropName));
    },
    [setPlantedCrops],
  );

  const handleSelectCrops: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const isChecked = event.target.checked;
      const cropName = event.target.value;

      if (!isChecked) {
        removeUnselectedCrop(cropName);
        return;
      }

      setPlantedCrops((crops) => [...crops, cropName]);
    },
    [removeUnselectedCrop, setPlantedCrops],
  );

  const handleWithPlantedCrops = useCallback(() => {
    const hasPlantedCrops = farm?.crops.length;

    if (hasPlantedCrops) {
      setPlantedCrops(farm.crops);
    }
  }, [farm?.crops, setPlantedCrops]);

  useEffect(() => {
    handleWithPlantedCrops();
  }, [handleWithPlantedCrops]);

  return (
    <CropsContainer>
      <span>Culturas plantadas:</span>
      <CropsFieldsBox>
        {cropsData.map((crop, index) => (
          <FormControlLabel
            key={crop.semanticalName}
            control={
              <Checkbox
                name={`crops[${index}]`}
                checked={plantedCrops.includes(crop.name)}
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

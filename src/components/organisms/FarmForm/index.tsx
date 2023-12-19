import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { ValidationError as YupValidationError } from 'yup';

import { Button } from '../../atoms/Button';
import { Crops } from '../../molecules/Crops';
import { Document, IExportDocumentProps } from '../../molecules/Document';
import { Location } from '../../molecules/Location';
import { InputText } from '../../atoms/Forms/InputText';
import { useFarmContext, useModalContext } from '../../../contexts';

import { INITIAL_FARM_FORM_DATA } from './constants';
import { IFarmFormBaseProps } from './interfaces/IFarmFormBaseProps';
import { IFarm } from '../../../contexts/useFarmContext/interfaces/IFarm';

import { farmSchema } from './formValidations/validationSchema';

import { FormAreaContainer, FormContainer, FormFieldsBaseContainer } from './styles';
import { useFormErrorValidation } from './hooks/useFormErrorValidation';

export const FarmForm: FC<IFarmFormBaseProps> = ({ farm = null }) => {
  const formRef = useRef<FormHandles>(null);
  const documentComponentRef = useRef<IExportDocumentProps>(null);

  const [plantedCrops, setPlantedCrops] = useState<string[]>([]);

  const { closeModal } = useModalContext();
  const { createNewFarm, updateFarm } = useFarmContext();
  const { handleYupError } = useFormErrorValidation({ formRef });

  const handleRegisterOrUpdateFarm = useCallback(
    (newFarmData: IFarm) => {
      farm
        ? updateFarm({ ...newFarmData, crops: plantedCrops, id: farm.id })
        : createNewFarm({ ...newFarmData, crops: plantedCrops });
      formRef.current?.reset(INITIAL_FARM_FORM_DATA);
      closeModal();
    },
    [closeModal, createNewFarm, farm, plantedCrops, updateFarm],
  );

  const handleSubmit: SubmitHandler<IFarm> = async (newFarmData) => {
    try {
      await farmSchema.validate(
        {
          ...newFarmData,
          documentType: documentComponentRef.current?.documentType,
          totalArea: Number(newFarmData.totalArea),
        },
        { abortEarly: false },
      );
      handleRegisterOrUpdateFarm(newFarmData);
    } catch (errors) {
      if (errors instanceof YupValidationError) handleYupError(errors);
    }
  };

  useEffect(() => {
    if (farm) formRef.current?.setData(farm);
  }, [farm]);

  return (
    <Form initialData={INITIAL_FARM_FORM_DATA} noValidate onSubmit={handleSubmit} ref={formRef} placeholder={null}>
      <FormContainer>
        <FormFieldsBaseContainer>
          <InputText id="farm" label="Nome da fazenda" name="name" type="text" />
          <InputText id="farmer" label="Produtor" name="farmer" type="text" />
        </FormFieldsBaseContainer>

        <Document farm={farm} formRef={formRef} ref={documentComponentRef} />
        <Location farm={farm} formRef={formRef} />

        <FormAreaContainer>
          <InputText id="arableArea" label="Área agricultável (hectares)" name="arableArea" type="number" />
          <InputText id="vegetationArea" label="Área de vegetação (hectares)" name="vegetationArea" type="number" />
          <InputText id="totalArea" label="Área total (hectares)" name="totalArea" type="number" />
        </FormAreaContainer>

        <Crops plantedCrops={plantedCrops} farm={farm} setPlantedCrops={setPlantedCrops} />

        {farm ? (
          <Button type="submit" variant="contained">
            Atualizar
          </Button>
        ) : (
          <Button type="submit" variant="contained">
            Salvar
          </Button>
        )}
      </FormContainer>
    </Form>
  );
};

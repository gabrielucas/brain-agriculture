import { FC, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { v4 as uuid } from 'uuid';

import { Button } from '../atoms/Button';
import { InputText } from '../atoms/Forms/InputText';

import { Crops } from '../molecules/Crops';
import { Document } from '../molecules/Document';
import { Location } from '../molecules/Location';
import { IFarmData } from '../../contexts/useFarmContext/interfaces/IFarmData';

import { FormAreaContainer, FormContainer, FormFieldsBaseContainer } from './styles';
import { useFarmContext } from '../../contexts/useFarmContext/useFarmContext';
import { useModalContext } from '../Modal/context/useModalContext';
import { INITIAL_FARM_FORM_DATA } from './constants';

export const FarmForm: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);

  const { setFarmsData, farmsData } = useFarmContext();
  const { closeModal } = useModalContext();

  useEffect(() => {
    console.log(farmsData);
  }, [farmsData]);

  const handleSubmit: SubmitHandler<IFarmData> = (data) => {
    setFarmsData((currentFarms) => [...currentFarms, { ...data, id: uuid(), crops: selectedCrops }]);
    formRef.current?.reset(INITIAL_FARM_FORM_DATA);
    closeModal();
  };

  return (
    <Form onSubmit={handleSubmit} ref={formRef} placeholder={null}>
      <FormContainer>
        <FormFieldsBaseContainer>
          <InputText id="farm" label="Nome da fazenda" name="farm" type="text" />
          <InputText id="farmer" label="Produtor" name="farmer" type="text" />
        </FormFieldsBaseContainer>
        <Document />
        <Location />
        <FormAreaContainer>
          <InputText id="arableArea" label="Área agricultável (hectares)" name="arableArea" type="number" />
          <InputText id="vegetationArea" label="Área de vegetação (hectares)" name="vegetationArea" type="number" />
          <InputText id="totalArea" label="Área total (hectares)" name="totalArea" type="number" />
        </FormAreaContainer>

        <Crops setSelectedCrops={setSelectedCrops} />

        <Button type="submit" variant="contained">
          Salvar
        </Button>
      </FormContainer>
    </Form>
  );
};

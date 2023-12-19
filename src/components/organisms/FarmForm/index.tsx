import { FC, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { v4 as uuid } from 'uuid';

import { Button } from '../../atoms/Button';
import { Crops } from '../../molecules/Crops';
import { Document } from '../../molecules/Document';
import { Location } from '../../molecules/Location';
import { InputText } from '../../atoms/Forms/InputText';
import { useFarmContext, useModalContext } from '../../../contexts';

import { INITIAL_FARM_FORM_DATA } from './constants';
import { IFarmFormBaseProps } from './interfaces/IFarmFormBaseProps';
import { IFarm } from '../../../contexts/useFarmContext/interfaces/IFarm';

import { FormAreaContainer, FormContainer, FormFieldsBaseContainer } from './styles';

export const FarmForm: FC<IFarmFormBaseProps> = ({ farm = null }) => {
  const formRef = useRef<FormHandles>(null);
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);

  const { setFarms } = useFarmContext();
  const { closeModal } = useModalContext();

  const handleSubmit: SubmitHandler<IFarm> = (data) => {
    setFarms((farms) => [...farms, { ...data, id: uuid(), crops: selectedCrops }]);
    formRef.current?.reset(INITIAL_FARM_FORM_DATA);
    closeModal();
  };

  useEffect(() => {
    if (farm) formRef.current?.setData({ ...farm });
  }, [farm]);

  return (
    <Form onSubmit={handleSubmit} ref={formRef} placeholder={null}>
      <FormContainer>
        <FormFieldsBaseContainer>
          <InputText id="farm" label="Nome da fazenda" name="name" type="text" />
          <InputText id="farmer" label="Produtor" name="farmer" type="text" />
        </FormFieldsBaseContainer>
        <Document formRef={formRef} farm={farm} />
        <Location farm={farm} />
        <FormAreaContainer>
          <InputText id="arableArea" label="Área agricultável (hectares)" name="arableArea" type="number" />
          <InputText id="vegetationArea" label="Área de vegetação (hectares)" name="vegetationArea" type="number" />
          <InputText id="totalArea" label="Área total (hectares)" name="totalArea" type="number" />
        </FormAreaContainer>

        <Crops farm={farm} setSelectedCrops={setSelectedCrops} />

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

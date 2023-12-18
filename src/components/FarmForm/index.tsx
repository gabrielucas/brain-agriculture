import { FC, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { v4 as uuid } from 'uuid';

import { Button } from '../atoms/Button';
import { InputText } from '../atoms/Forms/InputText';

import { FormAreaContainer, FormContainer, FormFieldsBaseContainer } from './styles';
import { Location } from '../molecules/Location';
import { IFarmData } from '../../contexts/useFarmContext/interfaces/IFarmData';
import { Crops } from '../molecules/Crops';
import { InputMask } from '../atoms/Forms/InputMask';

export const FarmForm: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);

  const handleSubmit: SubmitHandler<IFarmData> = (data) => {
    console.log({ ...data, id: uuid(), crops: selectedCrops });
  };

  return (
    <Form onSubmit={handleSubmit} ref={formRef} placeholder={null}>
      <FormContainer>
        <FormFieldsBaseContainer>
          <InputText id="farm" label="Nome da fazenda" name="farm" type="text" />
          <InputText id="farmer" label="Produtor" name="farmer" type="text" />
        </FormFieldsBaseContainer>

        {/* <FormControl>
          <RadioGroup>
            <FormControlLabel control={<Radio />} label="CPF" value="cpf" />
            <FormControlLabel control={<Radio />} label="CNPJ" value="cnpj" />
          </RadioGroup>
          <InputText id="document" label="CPF / CNPJ" name="document" type="number" />
        </FormControl> */}

        <InputMask mask="999.999.999-99" id="document" label="CPF / CNPJ" name="document" sx={{ flex: '50%' }} />

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

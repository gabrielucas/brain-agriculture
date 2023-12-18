import { FC, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Checkbox, FormControlLabel } from '@mui/material';

import { Button } from '../atoms/Button';
import { InputText } from '../atoms/Forms/InputText';

import { CropsContainer, CropsFieldsBox, FormAreaContainer, FormContainer, FormFieldsBaseContainer } from './styles';
import { Location } from '../molecules/Location';

export const FarmForm: FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler = (data) => {
    console.log(data);
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

        <InputText id="document" label="CPF / CNPJ" name="document" type="number" sx={{ flex: '50%' }} />

        <Location />
        <FormAreaContainer>
          <InputText id="arableArea" label="Área agricultável (hectares)" name="arableArea" type="number" />
          <InputText id="vegetationArea" label="Área de vegetação (hectares)" name="vegetationArea" type="number" />
          <InputText id="totalArea" label="Área total (hectares)" name="totalArea" type="number" />
        </FormAreaContainer>

        <CropsContainer>
          <span>Culturas plantadas:</span>
          <CropsFieldsBox>
            <FormControlLabel control={<Checkbox size="small" />} label="Soja" />
            <FormControlLabel control={<Checkbox size="small" />} label="Milho" />
            <FormControlLabel control={<Checkbox size="small" />} label="Algodão" />
            <FormControlLabel control={<Checkbox size="small" />} label="Café" />
            <FormControlLabel control={<Checkbox size="small" />} label="Cana-de-açúcar" />
            <FormControlLabel control={<Checkbox size="small" />} label="Laranja" />
            <FormControlLabel control={<Checkbox size="small" />} label="Arroz" />
            <FormControlLabel control={<Checkbox size="small" />} label="Feijão" />
            <FormControlLabel control={<Checkbox size="small" />} label="Tomate" />
          </CropsFieldsBox>
        </CropsContainer>

        <Button type="submit" variant="contained">
          Salvar
        </Button>
      </FormContainer>
    </Form>
  );
};

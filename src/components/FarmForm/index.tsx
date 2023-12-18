import { FC, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { FormControlLabel } from '@mui/material';

import { Button } from '../atoms/Button';
import { InputText } from '../atoms/Forms/InputText';

import { CropsContainer, CropsFieldsBox, FormAreaContainer, FormContainer, FormFieldsBaseContainer } from './styles';
import { Location } from '../molecules/Location';
import { Checkbox } from '../atoms/Forms/Checkbox';

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
            <FormControlLabel control={<Checkbox name="crops[0]" value="soja" size="small" />} label="Soja" />
            <FormControlLabel control={<Checkbox name="crops[1]" value="milho" size="small" />} label="Milho" />
            <FormControlLabel control={<Checkbox name="crops[2]" value="algodao" size="small" />} label="Algodão" />
            <FormControlLabel control={<Checkbox name="crops[3]" value="cafe" size="small" />} label="Café" />
            <FormControlLabel
              control={<Checkbox name="crops[4]" value="cana-de-açúcar" size="small" />}
              label="Cana-de-açúcar"
            />
            <FormControlLabel control={<Checkbox name="crops[5]" value="laranja" size="small" />} label="Laranja" />
            <FormControlLabel control={<Checkbox name="crops[6]" value="arroz" size="small" />} label="Arroz" />
            <FormControlLabel control={<Checkbox name="crops[7]" value="feijao" size="small" />} label="Feijão" />
            <FormControlLabel control={<Checkbox name="crops[8]" value="tomate" size="small" />} label="Tomate" />
          </CropsFieldsBox>
        </CropsContainer>

        <Button type="submit" variant="contained">
          Salvar
        </Button>
      </FormContainer>
    </Form>
  );
};

import * as Yup from 'yup';
import { isValidCNPJ, isValidCPF } from '../../../../helpers/validators';

export const farmSchema = Yup.object().shape({
  name: Yup.string().required('Informe o nome da fazenda.'),
  farmer: Yup.string().min(2, 'Insira um nome válido.').required('Informe o nome do produtor.'),
  city: Yup.string().required('Selecione a cidade.'),
  state: Yup.string().required('Selecione o estado.'),
  documentType: Yup.string(),
  document: Yup.string()
    .when('documentType', {
      is: 'CPF',
      then: () => Yup.string().test('isValidCPF', 'Insira um CPF válido.', (value) => isValidCPF(String(value))),
    })
    .when('documentType', {
      is: 'CNPJ',
      then: () => Yup.string().test('isValidCNPJ', 'Insira um CNPJ válido.', (value) => isValidCNPJ(String(value))),
    })
    .required('Informe o número do documento'),
  arableArea: Yup.string().required('Informe o tamanho da área agricultável.'),
  totalArea: Yup.string().when(['arableArea', 'vegetationArea'], {
    is: (arableArea: number, vegetationArea: number) => arableArea && vegetationArea,
    then: () =>
      Yup.number()
        .test(
          'sumOfArableAndVegetationArea',
          'A área total é menor que a soma das áreas agricultável e de vegetação.',
          function (value) {
            const { arableArea, vegetationArea } = this.parent! ?? {};
            return Number(value) >= Number(arableArea) + Number(vegetationArea);
          },
        )
        .required('Informe a área total da propriedade.'),
  }),
  vegetationArea: Yup.string().required('Informe o tamanho da área preservada.'),
});

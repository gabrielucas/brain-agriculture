import * as Yup from 'yup';

export const farmSchema = Yup.object().shape({
  name: Yup.string().required('Informe o nome da fazenda.'),
  farmer: Yup.string().min(2, 'Insira um nome válido.').required('Informe o nome do produtor.'),
  city: Yup.string().required('Selecione a cidade.'),
  state: Yup.string().required('Selecione o estado.'),
  document: Yup.string().required('Informe o número do documento'),
  arableArea: Yup.string().required('Informe o tamanho da área agricultável.'),
  totalArea: Yup.string().required('Informe a área total da propriedade.'),
  vegetationArea: Yup.string().required('Informe o tamanho da área preservada.'),
});

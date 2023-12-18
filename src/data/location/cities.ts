import { ICity } from '../@types/interfaces/ICity';
import { v4 as uuid } from 'uuid';

export const cities: ICity[] = [
  { id: uuid(), name: 'Rio Branco', uf: 'AC' },
  { id: uuid(), name: 'Cruzeiro do Sul', uf: 'AC' },
  { id: uuid(), name: 'Sena Madureira', uf: 'AC' },
  { id: uuid(), name: 'Tarauacá', uf: 'AC' },
  { id: uuid(), name: 'Feijó', uf: 'AC' },
  { id: uuid(), name: 'Mâncio Lima', uf: 'AC' },
  { id: uuid(), name: 'Porto Acre', uf: 'AC' },
  { id: uuid(), name: 'Plácido de Castro', uf: 'AC' },
  { id: uuid(), name: 'Xapuri', uf: 'AC' },
  { id: uuid(), name: 'Brasiléia', uf: 'AC' },

  { id: uuid(), name: 'Maceió', uf: 'AL' },
  { id: uuid(), name: 'Arapiraca', uf: 'AL' },
  { id: uuid(), name: 'Palmeira dos Índios', uf: 'AL' },
  { id: uuid(), name: 'Rio Largo', uf: 'AL' },
  { id: uuid(), name: 'Coruripe', uf: 'AL' },
  { id: uuid(), name: 'São Miguel dos Campos', uf: 'AL' },
  { id: uuid(), name: 'Penedo', uf: 'AL' },
  { id: uuid(), name: 'Delmiro Gouveia', uf: 'AL' },
  { id: uuid(), name: 'Campo Alegre', uf: 'AL' },
  { id: uuid(), name: 'União dos Palmares', uf: 'AL' },
];

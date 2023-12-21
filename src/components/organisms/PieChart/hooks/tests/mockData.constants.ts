import { faker } from '@faker-js/faker';
import { IFarm } from '../../../../../contexts/useFarmContext/interfaces/IFarm';
import { IChartData } from '../../interfaces/ICharData';

const mockFarmDataToTesting: IFarm[] = [
  {
    arableArea: 100,
    city: faker.location.city(),
    crops: ['Soja', 'Milho', 'Cenoura'],
    document: faker.lorem.word(),
    farmer: faker.lorem.words(),
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    state: 'MT',
    totalArea: faker.number.int(),
    vegetationArea: 150,
  },
  {
    arableArea: 230,
    city: faker.location.city(),
    crops: ['Morango', 'Algodão', 'Café', 'Milho'],
    document: faker.lorem.word(),
    farmer: faker.lorem.words(),
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    state: 'MT',
    totalArea: faker.number.int(),
    vegetationArea: 400,
  },
  {
    arableArea: 270,
    city: faker.location.city(),
    crops: ['Arroz', 'Feijão', 'Cenoura'],
    document: faker.lorem.word(),
    farmer: faker.lorem.words(),
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    state: 'MS',
    totalArea: faker.number.int(),
    vegetationArea: 300,
  },
  {
    arableArea: 500,
    city: faker.location.city(),
    crops: ['Cana-de-açúcar', 'Laranja', 'Feijão', 'Tomate'],
    document: faker.lorem.word(),
    farmer: faker.lorem.words(),
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    state: 'MS',
    totalArea: faker.number.int(),
    vegetationArea: 500,
  },
  {
    arableArea: 600,
    city: faker.location.city(),
    crops: ['Cebola', 'Algodão', 'Cenoura'],
    document: faker.lorem.word(),
    farmer: faker.lorem.words(),
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    state: 'MS',
    totalArea: faker.number.int(),
    vegetationArea: 780,
  },
  {
    arableArea: 420,
    city: faker.location.city(),
    crops: ['Soja', 'Café', 'Morango'],
    document: faker.lorem.word(),
    farmer: faker.lorem.words(),
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    state: 'RS',
    totalArea: faker.number.int(),
    vegetationArea: 580,
  },
];

const mockFarmsByState: IChartData[] = [
  { name: 'MT', value: 2 },
  { name: 'MS', value: 3 },
  { name: 'RS', value: 1 },
];

const mockFarmsByPlantedCrop: IChartData[] = [
  {
    name: 'Soja',
    value: 2,
  },
  {
    name: 'Milho',
    value: 2,
  },
  {
    name: 'Cenoura',
    value: 3,
  },
  {
    name: 'Morango',
    value: 2,
  },
  {
    name: 'Algodão',
    value: 2,
  },
  {
    name: 'Café',
    value: 2,
  },
  {
    name: 'Arroz',
    value: 1,
  },
  {
    name: 'Feijão',
    value: 2,
  },
  {
    name: 'Cana-de-açúcar',
    value: 1,
  },
  {
    name: 'Laranja',
    value: 1,
  },
  {
    name: 'Tomate',
    value: 1,
  },
  {
    name: 'Cebola',
    value: 1,
  },
];

const mockLandUseData: IChartData[] = [
  { name: 'Área agricultável', value: 2120 },
  {
    name: 'Área de vegetação',
    value: 2710,
  },
];

export { mockFarmsByState, mockFarmsByPlantedCrop, mockFarmDataToTesting, mockLandUseData };

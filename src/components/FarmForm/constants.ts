import { IFarm } from '../../contexts/useFarmContext/interfaces/IFarm';

export const INITIAL_FARM_FORM_DATA: Omit<IFarm, 'id'> = {
  arableArea: Number(''),
  city: '',
  crops: [],
  document: '',
  farmer: '',
  farm: '',
  state: '',
  totalArea: Number(''),
  vegetationArea: Number(''),
};

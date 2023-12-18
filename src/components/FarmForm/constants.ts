import { IFarmData } from '../../contexts/useFarmContext/interfaces/IFarmData';

export const INITIAL_FARM_FORM_DATA: Omit<IFarmData, 'id'> = {
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

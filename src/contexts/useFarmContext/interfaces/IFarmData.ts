export interface IFarmData {
  id: string | number;
  farm: string;
  farmer: string;
  document: string;
  city: string;
  state: string;
  arableArea: number;
  vegetationArea: number;
  totalArea: number;
  crops: string[];
}

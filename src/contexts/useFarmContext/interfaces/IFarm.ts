export interface IFarm {
  id: string | number;
  name: string;
  farmer: string;
  document: string;
  city: string;
  state: string;
  arableArea: number;
  vegetationArea: number;
  totalArea: number;
  crops: string[];
}

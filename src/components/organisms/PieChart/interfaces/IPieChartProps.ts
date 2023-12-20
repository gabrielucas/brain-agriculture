import { IChartData } from './ICharData';

type ColorDictionaryType = { [key: string]: string };

export interface IPieChartProps {
  title: string;
  data: IChartData[];
  colorDictionary?: ColorDictionaryType;
}

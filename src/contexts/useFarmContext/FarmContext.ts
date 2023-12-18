import { createContext } from 'react';
import { IFarmContext } from './interfaces/IFarmContext';

export const FarmContext = createContext<IFarmContext | null>(null);

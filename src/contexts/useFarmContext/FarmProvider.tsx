import { FC, ReactNode, useState } from 'react';

import { IFarmData } from './interfaces/IFarmData';
import { FarmContext } from './FarmContext';

interface IFarmProviderProps {
  children?: ReactNode;
}

export const FarmProvider: FC<IFarmProviderProps> = ({ children }) => {
  const [farmData, setFarmData] = useState<IFarmData | null>(null);

  return <FarmContext.Provider value={{ farmData, setFarmData }}>{children}</FarmContext.Provider>;
};

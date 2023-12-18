import { FC, ReactNode, useState } from 'react';

import { IFarmData } from './interfaces/IFarmData';
import { FarmContext } from './FarmContext';

interface IFarmProviderProps {
  children?: ReactNode;
}

export const FarmProvider: FC<IFarmProviderProps> = ({ children }) => {
  const [farmsData, setFarmsData] = useState<IFarmData[]>([]);

  return <FarmContext.Provider value={{ farmsData, setFarmsData }}>{children}</FarmContext.Provider>;
};

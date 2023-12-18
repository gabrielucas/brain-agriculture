import { FC, ReactNode, useState } from 'react';

import { IFarm } from './interfaces/IFarm';
import { FarmContext } from './FarmContext';

interface IFarmProviderProps {
  children?: ReactNode;
}

export const FarmProvider: FC<IFarmProviderProps> = ({ children }) => {
  const [farms, setFarms] = useState<IFarm[]>([]);

  return <FarmContext.Provider value={{ farms, setFarms }}>{children}</FarmContext.Provider>;
};

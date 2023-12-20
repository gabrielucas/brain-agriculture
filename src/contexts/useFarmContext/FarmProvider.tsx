import { FC, ReactNode, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { IFarm } from './interfaces/IFarm';
import { FarmContext } from './FarmContext';
import { mockedFarmsData } from '../../data/farms';

interface IFarmProviderProps {
  children?: ReactNode;
}

export const FarmProvider: FC<IFarmProviderProps> = ({ children }) => {
  const [farms, setFarms] = useState<IFarm[]>(mockedFarmsData);

  const createNewFarm = useCallback((newFarm: Omit<IFarm, 'id'>) => {
    setFarms((farms) => [...farms, { ...newFarm, id: uuid() }]);
  }, []);

  const updateFarm = useCallback((farmToUpdate: IFarm) => {
    setFarms((farms) =>
      farms.map((farm) => {
        if (farmToUpdate.id === farm.id) return farmToUpdate;
        return farm;
      }),
    );
  }, []);

  const deleteFarm = useCallback((farmId: string | number) => {
    setFarms((farms) => farms.filter((farm) => farm.id !== farmId));
  }, []);

  return (
    <FarmContext.Provider value={{ createNewFarm, deleteFarm, farms, updateFarm }}>{children}</FarmContext.Provider>
  );
};

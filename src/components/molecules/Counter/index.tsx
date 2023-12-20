import { FC, useMemo } from 'react';
import { Divider } from '@mui/material';

import { useFarmContext } from '../../../contexts';

import { CounterBox, CounterContainer } from './styles';

export const Counter: FC = () => {
  const { farms } = useFarmContext();

  const totalFarms = farms.length;

  const totalAreaOfAllFarms = useMemo(
    () => farms.reduce((totalArea, currentFarms) => totalArea + currentFarms.totalArea, 0),
    [farms],
  );

  return (
    <>
      <CounterBox>
        <CounterContainer>
          <strong>Total de fazendas</strong>
          <div className="counter">{totalFarms}</div>
        </CounterContainer>
        <CounterContainer>
          <strong>Área total (ha)</strong>
          <div className="counter">{totalAreaOfAllFarms}</div>
        </CounterContainer>
      </CounterBox>
      <Divider flexItem />
    </>
  );
};

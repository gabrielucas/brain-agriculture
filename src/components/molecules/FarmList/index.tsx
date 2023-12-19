import { FC } from 'react';

import { FarmListItem } from './FarmListItem';
import { useFarmContext } from '../../../contexts/useFarmContext';

import { StyledList } from './styles';

export const FarmList: FC = () => {
  const { farms } = useFarmContext();

  return <StyledList>{farms?.map((farm) => <FarmListItem key={farm.id} farm={farm} />)}</StyledList>;
};

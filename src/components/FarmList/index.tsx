import { FC } from 'react';

import { FarmListItem } from './FarmListItem';
import { StyledList } from './styles';

interface FarmListProps {}

export const FarmList: FC<FarmListProps> = () => {
  return (
    <StyledList>
      <FarmListItem />
      <FarmListItem />
    </StyledList>
  );
};

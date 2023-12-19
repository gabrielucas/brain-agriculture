import { FC } from 'react';

import { Counter } from '../../molecules/Counter';

import { PageContainer } from '../common/styles';

export const Dashboard: FC = () => {
  return (
    <PageContainer>
      <Counter />
    </PageContainer>
  );
};

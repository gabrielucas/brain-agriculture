import { FC } from 'react';
import { ButtonProps } from '@mui/material';

import { DataTestId } from '../../../test/enums';

import { StylizedDefaultButton } from './styles';

export const Button: FC<ButtonProps> = (props) => {
  return <StylizedDefaultButton data-testid={DataTestId.DEFAULT_BUTTON} {...props} />;
};

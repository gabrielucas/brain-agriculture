import { FC } from 'react';
import { ButtonProps } from '@mui/material';

import { StylizedDefaultButton } from './styles';

export const Button: FC<ButtonProps> = (props) => {
  return <StylizedDefaultButton {...props} />;
};

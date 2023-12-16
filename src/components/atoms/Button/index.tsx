import { FC } from 'react';
import { DefaultStyledButton } from './styles';
import { ButtonProps } from '@mui/material';

export const Button: FC<ButtonProps> = (props) => {
  return <DefaultStyledButton {...props} />;
};

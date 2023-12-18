import { FC, useEffect, useRef } from 'react';

import { TextFieldProps, TextFieldVariants } from '@mui/material';
import { StyledTextField } from '../styles';
import { useField } from '@unform/core';

export type InputTextProps = Omit<TextFieldProps, 'variant'> & {
  variant?: TextFieldVariants;
};

export const InputText: FC<InputTextProps> = ({ name = '', ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { defaultValue, error, fieldName, registerField, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      clearValue: (ref) => (ref.current.value = ''),
      getValue: (ref) => ref.current?.value,
      setValue: (ref, value) => {
        ref.current.value = value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <StyledTextField
      defaultValue={defaultValue}
      error={!!error}
      name={name}
      onFocus={clearError}
      inputRef={inputRef}
      {...rest}
    />
  );
};

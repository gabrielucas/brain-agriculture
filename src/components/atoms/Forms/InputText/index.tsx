import { FC, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { TextFieldProps, TextFieldVariants } from '@mui/material';

import { StyledTextField } from './styles';

type InputTextProps = Omit<TextFieldProps, 'variant'> & {
  variant?: TextFieldVariants;
};

export const InputText: FC<InputTextProps> = ({ name = '', ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { error, fieldName, registerField, clearError } = useField(name);

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
      {...rest}
      error={!!error}
      helperText={error}
      name={name}
      onFocus={clearError}
      inputRef={inputRef}
      size="small"
    />
  );
};

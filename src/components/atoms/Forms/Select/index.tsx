import { FC, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Select as MuiSelect, SelectProps } from '@mui/material';

export const Select: FC<SelectProps> = ({ name = '', ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { error, fieldName, registerField, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      clearValue: (ref) => (ref.current.value = ''),
      getValue: (ref) => ref.current.value,
      setValue: (ref, newValue) => (ref.current.value = newValue),
    });
  }, [fieldName, registerField]);

  return (
    <MuiSelect
      {...rest}
      error={Boolean(error)}
      inputRef={inputRef}
      name={name}
      onSelect={clearError}
      onFocus={clearError}
    />
  );
};

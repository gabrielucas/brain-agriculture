import { FC, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Select as MuiSelect, SelectProps } from '@mui/material';

export const Select: FC<SelectProps> = ({ name = '', ...rest }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { defaultValue = '', error, fieldName, registerField, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      clearValue: (ref) => (ref.current.value = ''),
      getValue: (ref) => ref.current.value,
      setValue: (ref, newValue) => (ref.current.value = newValue),
    });
  }, [fieldName, ref, registerField]);

  return <MuiSelect {...rest} defaultValue={defaultValue} inputRef={inputRef} error={!!error} onFocus={clearError} />;
};

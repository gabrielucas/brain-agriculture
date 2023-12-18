import { ForwardRefRenderFunction, forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { useField } from '@unform/core';
import { Select as MuiSelect, SelectChangeEvent, SelectProps } from '@mui/material';

import { ISelectHandles } from './interfaces/ISelectHandles';

const SelectComponent: ForwardRefRenderFunction<ISelectHandles, SelectProps> = ({ name = '', ...rest }, ref) => {
  const { defaultValue, error, fieldName, registerField, clearError } = useField(name);

  const [selectedOption, setSelectedOption] = useState<string | number>('');

  const selectChange = (event: SelectChangeEvent) => setSelectedOption(event.target.value);

  useImperativeHandle(
    ref,
    () => {
      return { selectChange };
    },
    [],
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref,
      clearValue: (ref) => (ref.current.value = ''),
      getValue: () => String(selectedOption),
      setValue: (__ref, newValue) => setSelectedOption(newValue),
    });
  }, [fieldName, ref, registerField, selectedOption]);

  return (
    <MuiSelect
      {...rest}
      ref={ref}
      defaultValue={defaultValue}
      error={!!error}
      onFocus={clearError}
      value={selectedOption}
    />
  );
};

export const Select = forwardRef(SelectComponent);

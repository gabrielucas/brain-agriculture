import { FC, useEffect, useRef } from 'react';
import { CheckboxProps, Checkbox as MuiCheckboxComponent } from '@mui/material';
import { useField } from '@unform/core';

export const Checkbox: FC<CheckboxProps> = ({ name = '', ...rest }) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: checkboxRef,
      clearValue: (ref) => (ref.current.checked = false),
      getValue: (ref) => ref.current?.value,
      setValue: (ref) => {
        ref.current.checked = !ref.current?.checked;
      },
    });
  }, [fieldName, registerField]);

  return <MuiCheckboxComponent name={name} inputRef={checkboxRef} {...rest} />;
};

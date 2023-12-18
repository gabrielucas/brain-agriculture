import { FC, useEffect, useRef } from 'react';
import { CheckboxProps, Checkbox as MuiCheckboxComponent } from '@mui/material';
import { useField } from '@unform/core';

export const Checkbox: FC<CheckboxProps> = ({ name = '', ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      clearValue: (ref) => (ref.current.checked = false),
      getValue: (ref) => ref.current?.value,
      setValue: (ref) => {
        ref.current.checked = !ref.current?.checked;
      },
    });
  }, [fieldName, registerField]);

  return <MuiCheckboxComponent name={name} inputRef={inputRef} {...rest} />;
};

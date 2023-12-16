import { FC, useEffect, useRef } from 'react';
import ReactInputMask from 'react-input-mask';

import { useField } from '@unform/core';
import { StyledTextField } from '../styles';
import { InputTextProps } from '../InputText';

type InputMaskProps = InputTextProps & {
  mask?: string | (string | RegExp)[];
};

export const InputMask: FC<InputMaskProps> = ({ disabled, mask = '', name = '', ...rest }) => {
  const inputRef = useRef(null);
  const { defaultValue, fieldName, registerField, clearError } = useField(name);

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
    <ReactInputMask
      defaultValue={defaultValue}
      disabled={disabled}
      mask={mask}
      name={name}
      onFocus={clearError}
      {...rest}
    >
      {(inputProps) => <StyledTextField {...inputProps} />}
    </ReactInputMask>
  );
};

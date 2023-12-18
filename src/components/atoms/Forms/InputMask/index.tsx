import { FC, useEffect, useRef } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';

import { useField } from '@unform/core';
import { StyledTextField } from '../styles';
import { InputTextProps } from '../InputText';

type InputMaskProps = InputProps & InputTextProps;

export const InputMask: FC<InputMaskProps> = ({ mask, name = '', ...rest }) => {
  const inputRef = useRef(null);
  const { defaultValue, fieldName, registerField, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      clearValue(ref) {
        ref.setInputValue('');
      },
      getValue: (ref) => ref.current?.value,
      setValue: (ref, newValue) => {
        ref.setInputValue(newValue);
      },
    });
  }, [fieldName, registerField]);

  return (
    <ReactInputMask
      {...rest}
      alwaysShowMask={false}
      defaultValue={defaultValue}
      mask={mask}
      maskChar=" "
      name={name}
      onFocus={clearError}
      ref={inputRef}
    >
      {(inputProps) => <StyledTextField {...inputProps} />}
    </ReactInputMask>
  );
};

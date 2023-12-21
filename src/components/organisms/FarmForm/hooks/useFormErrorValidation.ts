import { RefObject, useCallback } from 'react';
import { FormHandles } from '@unform/core';

import { ValidationError as YupValidationError } from 'yup';

interface IUseFormErrorValidationProps {
  formRef: RefObject<FormHandles>;
}

export const useFormErrorValidation = ({ formRef }: IUseFormErrorValidationProps) => {
  const handleYupError = useCallback(
    (errors: YupValidationError) => {
      const validationErrors: { [key: string]: string } = {};

      errors.inner.forEach((error) => {
        if (error.path) validationErrors[error.path] = error.message;
      });

      formRef?.current?.setErrors(validationErrors);
    },
    [formRef],
  );

  return { handleYupError };
};

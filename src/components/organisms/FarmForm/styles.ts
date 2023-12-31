import { Box, RadioGroup } from '@mui/material';
import { styled } from 'styled-components';

const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0.5rem;
  color: ${({ theme }) => theme['--gray-900']};

  button {
    margin: 0;
    align-self: flex-end;

    @media (max-width: ${({ theme }) => theme['--md']}) {
      align-self: stretch;
    }
  }
`;

const FormFieldsBaseContainer = styled(Box)`
  display: flex;
  gap: 0.75rem;

  & > .MuiFormControl-root {
    flex: 50%;
  }
`;

const FormAreaContainer = styled(FormFieldsBaseContainer)`
  @media (max-width: ${({ theme }) => theme['--md']}) {
    flex-direction: column;
  }
`;

const RadioGroupContainer = styled(RadioGroup)`
  flex-direction: row;
`;

export { FormAreaContainer, FormContainer, FormFieldsBaseContainer, RadioGroupContainer };

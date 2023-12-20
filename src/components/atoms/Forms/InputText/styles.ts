import { TextField } from '@mui/material';
import { styled } from 'styled-components';

const StyledTextField = styled(TextField)`
  font-size: 0.875rem;

  &:focus-within {
    label {
      color: ${({ theme }) => theme['--green-900']};
    }

    fieldset {
      border-color: ${({ theme }) => theme['--green-900']} !important;
    }
  }
`;

export { StyledTextField };

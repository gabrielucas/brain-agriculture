import { Box, FormGroup } from '@mui/material';
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

  & > div {
    flex: 1;
  }
`;

const FormAreaContainer = styled(FormFieldsBaseContainer)`
  @media (max-width: ${({ theme }) => theme['--md']}) {
    flex-direction: column;
  }
`;

const CropsContainer = styled(Box)`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 0.625rem;
  }
`;

const CropsFieldsBox = styled(FormGroup)`
  display: grid;
  gap: 0 0.75rem;
  grid-template-columns: repeat(3, 1fr);

  .Mui-checked {
    color: ${({ theme }) => theme['--green-900']};
  }

  @media (max-width: ${({ theme }) => theme['--md']}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export { CropsContainer, CropsFieldsBox, FormAreaContainer, FormContainer, FormFieldsBaseContainer };

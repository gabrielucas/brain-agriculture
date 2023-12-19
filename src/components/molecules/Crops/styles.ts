import { Box, FormGroup } from '@mui/material';
import { styled } from 'styled-components';

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
  grid-template-columns: repeat(4, 1fr);

  .Mui-checked {
    color: ${({ theme }) => theme['--green-900']};
  }

  @media (max-width: ${({ theme }) => theme['--md']}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export { CropsContainer, CropsFieldsBox };

import { styled } from 'styled-components';

const FarmContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 1rem;
  border-radius: 8px;

  background: ${({ theme }) => theme['--white']};
`;

export { FarmContainer };

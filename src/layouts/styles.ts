import { styled } from 'styled-components';

const DefaultLayoutContainer = styled.div`
  max-width: 90vw;
  margin: 2rem auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  border-radius: 8px;
  background: ${({ theme }) => theme['--green-600']};
`;

export { DefaultLayoutContainer };

import { styled } from 'styled-components';

const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 1.5rem;
  border-radius: 8px;

  background: ${({ theme }) => theme['--white']};
`;

export { PageContainer };

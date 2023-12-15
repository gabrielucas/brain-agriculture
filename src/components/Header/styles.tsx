import { styled } from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  margin-bottom: 1rem;

  border-radius: 8px;
  background: ${({ theme }) => theme['--green-600']};

  img {
    height: 2rem;
    border-radius: 4px;
    background: ${({ theme }) => theme['--green-700']};
    padding: 0.25rem;
  }

  nav {
    display: flex;
    gap: 1rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${({ theme }) => theme['--gray-100']};
      border-bottom: 2px solid transparent;

      transition: border-color 0.1s;

      &:hover,
      &.active {
        border-bottom-color: ${({ theme }) => theme['--gray-100']};
      }
    }
  }
`;

export { HeaderContainer };

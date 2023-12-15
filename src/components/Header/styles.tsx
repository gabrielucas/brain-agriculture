import { styled } from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;

  margin-bottom: 1.5rem;

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

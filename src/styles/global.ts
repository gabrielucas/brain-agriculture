import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
      background: ${({ theme }) => theme['--gray-100']};
      -webkit-font-smothing: antialiased;
    }

    body,
    button,
    input {
      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      color: ${({ theme }) => theme['--gray-600']};
      outline: none;
      border: none;
    }

    button {
      background: none;
    }

    ul, ol {
      list-style: none;
    }
`;

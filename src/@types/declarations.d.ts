import { defaulTheme } from '../styles/themes/default';

type ThemeType = typeof defaulTheme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeType {}
}

import { MainProvider, MainProviderProps } from '../../MainProvider';

export const defaultProviderWrapper = ({ children }: MainProviderProps) => <MainProvider>{children}</MainProvider>;

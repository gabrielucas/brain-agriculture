import { createContext } from 'react';
import { IModalContext } from './types/interfaces';

export const ModalContext = createContext<IModalContext | null>(null);

import { RefObject } from 'react';
import { IFarm } from '../../../../contexts/useFarmContext/interfaces/IFarm';
import { FormHandles } from '@unform/core';

export interface IFarmFormBaseProps {
  farm?: IFarm | null;
  formRef?: RefObject<FormHandles>;
}

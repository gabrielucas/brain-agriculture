import { SelectChangeEvent } from '@mui/material';

export interface ISelectHandles {
  selectChange(event: SelectChangeEvent<unknown>): void;
}

import { FC } from 'react';

import { TextField } from '@mui/material';

export const FarmRegistrationForm: FC = () => {
  return (
    <div>
      <form>
        <TextField id="document" label="CPF" />
      </form>
    </div>
  );
};

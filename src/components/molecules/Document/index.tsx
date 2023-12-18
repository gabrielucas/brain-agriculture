import { ChangeEventHandler, FC, useCallback, useMemo, useState } from 'react';

import { InputText } from '../../atoms/Forms/InputText';
import { DocumentType, convertToDocumentFormat } from '../../../helpers/convertToDocumentFormat';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

export const Document: FC = () => {
  const [documentType, setDocumentType] = useState<DocumentType>('CPF');
  const [documentNumber, setDocumentNumber] = useState('');

  const handleDocumentType: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const {
      target: { value: selectedDocumentType },
    } = event;

    setDocumentType(selectedDocumentType as DocumentType);
    setDocumentNumber('');
  }, []);

  const handleDocumentFormat: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const {
        target: { value },
      } = event;

      let formattedDocument: string | undefined = '';

      if (documentType === 'CPF') formattedDocument = convertToDocumentFormat(value, 'CPF');
      if (documentType === 'CNPJ') formattedDocument = convertToDocumentFormat(value, 'CNPJ');

      setDocumentNumber(String(formattedDocument));
    },
    [documentType],
  );

  const charLimit = useMemo(() => {
    if (documentType === 'CNPJ') return 18;
    return 14;
  }, [documentType]);

  return (
    <FormControl>
      <RadioGroup onChange={handleDocumentType} row value={documentType}>
        <FormControlLabel control={<Radio />} label="CPF" value="CPF" />
        <FormControlLabel control={<Radio />} label="CNPJ" value="CNPJ" />
      </RadioGroup>
      <InputText
        id="document"
        inputProps={{ maxLength: charLimit }}
        label="CPF / CNPJ"
        name="document"
        onChange={handleDocumentFormat}
        value={documentNumber}
        type="text"
      />
    </FormControl>
  );
};

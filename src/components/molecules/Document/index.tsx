import { ChangeEventHandler, FC, useCallback, useMemo, useState } from 'react';

import { InputText } from '../../atoms/Forms/InputText';
import { DocumentType, convertToDocumentFormat } from '../../../helpers/convertToDocumentFormat';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { IFarm } from '../../../contexts/useFarmContext/interfaces/IFarm';
import { isValidCNPJ, isValidCPF } from '../../../helpers/validators';

interface IDocumentProps {
  farm: IFarm;
}

export const Document: FC<IDocumentProps> = ({ farm }) => {
  const initialDocumentType: DocumentType = useMemo(() => {
    if (isValidCPF(farm?.document)) return 'CPF';
    if (isValidCNPJ(farm?.document)) return 'CNPJ';

    return 'CPF';
  }, [farm]);

  const [documentType, setDocumentType] = useState<DocumentType>(initialDocumentType);
  const [documentNumber, setDocumentNumber] = useState(farm?.document);

  const handleDocumentTypeChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const {
      target: { value: selectedDocumentType },
    } = event;

    setDocumentType(selectedDocumentType as DocumentType);
    setDocumentNumber('');
  }, []);

  const formatDocumentNumber: ChangeEventHandler<HTMLInputElement> = useCallback(
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
      <RadioGroup onChange={handleDocumentTypeChange} row value={documentType}>
        <FormControlLabel control={<Radio />} label="CPF" value="CPF" />
        <FormControlLabel control={<Radio />} label="CNPJ" value="CNPJ" />
      </RadioGroup>
      <InputText
        id="document"
        inputProps={{ maxLength: charLimit }}
        label="CPF / CNPJ"
        name="document"
        onChange={formatDocumentNumber}
        value={documentNumber}
        type="text"
      />
    </FormControl>
  );
};

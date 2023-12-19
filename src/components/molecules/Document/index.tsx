import { ChangeEventHandler, FC, useCallback, useMemo, useState } from 'react';

import { InputText } from '../../atoms/Forms/InputText';
import { DocumentType, convertToDocumentFormat } from '../../../helpers/convertToDocumentFormat';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { isValidCNPJ, isValidCPF } from '../../../helpers/validators';
import { IFarmFormBaseProps } from '../../organisms/FarmForm/interfaces/IFarmFormBaseProps';

export const Document: FC<IFarmFormBaseProps> = ({ farm, formRef }) => {
  const initialDocumentType: DocumentType = useMemo(() => {
    if (farm) {
      if (isValidCPF(farm.document)) return 'CPF';
      if (isValidCNPJ(farm.document)) return 'CNPJ';
    }

    return 'CPF';
  }, [farm]);

  const [documentType, setDocumentType] = useState<DocumentType>(initialDocumentType);

  const handleDocumentTypeChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const {
        target: { value: selectedDocumentType },
      } = event;

      setDocumentType(selectedDocumentType as DocumentType);
      formRef?.current?.clearField('document');
    },
    [formRef],
  );

  const formatDocumentNumber: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const {
        target: { value },
      } = event;

      let formattedDocument: string | undefined = '';

      if (documentType === 'CPF') formattedDocument = convertToDocumentFormat(value, 'CPF');
      if (documentType === 'CNPJ') formattedDocument = convertToDocumentFormat(value, 'CNPJ');

      formRef?.current?.setFieldValue('document', String(formattedDocument));
    },
    [documentType, formRef],
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
        type="text"
      />
    </FormControl>
  );
};

import {
  ChangeEventHandler,
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

import { InputText } from '../../atoms/Forms/InputText';
import { isValidCNPJ, isValidCPF } from '../../../utils/validators';
import { IFarmFormBaseProps } from '../../organisms/FarmForm/interfaces/IFarmFormBaseProps';
import { DocumentType, convertToDocumentFormat } from '../../../utils/convertToDocumentFormat';

export interface IExportDocumentProps {
  documentType: DocumentType;
}

const DocumentComponent: ForwardRefRenderFunction<IExportDocumentProps, IFarmFormBaseProps> = (
  { farm, formRef },
  ref,
) => {
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

  useImperativeHandle(
    ref,
    () => {
      return {
        documentType,
      };
    },
    [documentType],
  );

  return (
    <FormControl size="small">
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

export const Document = forwardRef(DocumentComponent);

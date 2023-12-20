export type DocumentType = 'CPF' | 'CNPJ';

const NON_DIGIT = new RegExp(/\D/g);
const CPF_REGEX = new RegExp(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
const CNPJ_REGEX = new RegExp(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/);

const convertToCPFFormat = (value: string) => {
  value = value.replace(NON_DIGIT, '');
  value = value.replace(CPF_REGEX, '$1.$2.$3-$4');

  return value;
};

const convertToCNPJFormat = (value: string) => {
  value = value.replace(NON_DIGIT, '');
  value = value.replace(CNPJ_REGEX, '$1.$2.$3/$4-$5');

  return value;
};

export const convertToDocumentFormat = (value: string | number, format: DocumentType) => {
  if (!value) return '';
  if (format === 'CPF') return convertToCPFFormat(String(value));
  if (format === 'CNPJ') return convertToCNPJFormat(String(value));
};

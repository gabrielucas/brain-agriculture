import { cpf, cnpj } from 'cpf-cnpj-validator';

export const isValidCPF = (value: string) => cpf.isValid(value);

export const isValidCNPJ = (value: string) => cnpj.isValid(value);

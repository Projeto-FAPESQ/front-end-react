export interface Licitacao {
  id: string;
  numero: string;
  ano: number;
  modalidade: string;
  objeto: string;
  valor: number;
  data: string;
  municipio: string;
  nomeUnidade: string;
  codUnidOrc: string;
  funcao: string;
  natureza: string;
  aplicacao: string;
  fonteRecursos: string;
  valorFixado: number;
  valorEmpenhado: number;
  valorLiquidado: number;
  valorPago: number;
  dataPagamento: string;
}
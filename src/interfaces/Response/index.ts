import { ITransactionCreateResponse } from './transactionCreate';

export interface IResponse {
  status: number;
  data: any | ITransactionCreateResponse;
}

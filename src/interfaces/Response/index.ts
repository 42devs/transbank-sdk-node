import { ITransactionCommitResponse } from './transactionCommit';
import { ITransactionCreateResponse } from './transactionCreate';
import { ITransactionStatusResponse } from './transactionStatus';

export interface IResponse {
  status: number;
  data: any | ITransactionCreateResponse | ITransactionCommitResponse | ITransactionStatusResponse;
}

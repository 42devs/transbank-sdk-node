import { ITransactionCommitResponse } from './transactionCommit';
import { ITransactionCreateResponse } from './transactionCreate';
import { ITransactionStatusResponse } from './transactionStatus';
import { ITransactionRefundResponse } from './transactionRefund';
import { ITransactionCaptureResponse } from './transactionCapture';

export interface IResponse {
  status: number;
  data: any
    | ITransactionCreateResponse
    | ITransactionCommitResponse
    | ITransactionStatusResponse
    | ITransactionRefundResponse
    | ITransactionCaptureResponse;
}

import { ITransactionCommitResponse } from './transactionCommit';
import { ITransactionCreateResponse } from './transactionCreate';
import { ITransactionStatusResponse } from './transactionStatus';
import { ITransactionRefundResponse } from './transactionRefund';
import { ITransactionCaptureResponse } from './transactionCapture';
import { IMallTransactionCreateResponse } from './mallTransactionCreate';
import { IMallTransactionCommitResponse } from './mallTransactionCommit';
import { IMallTransactionStatusResponse } from './mallTransactionStatus';
import { IMallTransactionRefundResponse } from './mallTransactionRefund';

export interface IResponse {
  status: number;
  data: any
    | ITransactionCreateResponse
    | ITransactionCommitResponse
    | ITransactionStatusResponse
    | ITransactionRefundResponse
    | ITransactionCaptureResponse
    | IMallTransactionCreateResponse
    | IMallTransactionCommitResponse
    | IMallTransactionStatusResponse
    | IMallTransactionRefundResponse;
}

import {
  ITransactionCreateResponse,
  ITransactionRefundResponse,
  ITransactionCaptureResponse,
  ITransactionCommitResponse,
  ITransactionStatusResponse,
} from './transaction';

import {
  IMallTransactionCreateResponse,
  IMallTransactionCommitResponse,
  IMallTransactionStatusResponse,
  IMallTransactionCaptureResponse,
  IMallTransactionRefundResponse,
} from './mallTransaction';

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
    | IMallTransactionRefundResponse
    | IMallTransactionCaptureResponse;
}

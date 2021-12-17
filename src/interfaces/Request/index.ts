import { IHeaders } from '~/interfaces/Headers';
import { IMallTransactionCreateRequest } from './mallTransactionCreate';
import { ITransactionCaptureRequest } from './transactionCapture';
import { ITransactionCreateRequest } from './transactionCreate';
import { ITransactionRefundRequest } from './transactionRefund';

export interface ITest {
  test: string;
}
export interface IRequest {
  method: 'post'|'get'|'put'|'delete'|'patch';
  path?: string;
  headers?: IHeaders,
  body?:
    ITransactionCreateRequest
    | ITransactionRefundRequest
    | ITransactionCaptureRequest
    | IMallTransactionCreateRequest
    | ITest;
  url: string;
  timeout?: number;
}

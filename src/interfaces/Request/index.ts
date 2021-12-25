import { IHeaders } from '~/interfaces/Headers';
import {
  ITransactionCreateRequest,
  ITransactionCaptureRequest,
  ITransactionRefundRequest,
} from './transaction';
import {
  IMallTransactionReturnRequest,
  IMallTransactionCreateRequest,
} from './mallTransaction';

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
    | IMallTransactionReturnRequest
    | ITest;
  url: string;
  timeout?: number;
}

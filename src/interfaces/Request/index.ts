import { IHeaders } from '~/interfaces/Headers';
import { ITransactionCreateRequest } from './transactionCreate';

interface ITest {
  test: string;
}
export interface IRequest {
  method: 'post'|'get'|'put'|'delete'|'patch';
  path?: string;
  headers?: IHeaders,
  body?: ITransactionCreateRequest | ITest;
  url: string;
  timeout?: number;
}

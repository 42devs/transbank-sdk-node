import { ITransactionRefundRequest } from '../transaction';

export interface IMallTransactionReturnRequest extends ITransactionRefundRequest {
  commerceCode: string;
  buyOrder: string;
}

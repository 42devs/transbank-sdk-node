import { ITransactionRefundRequest } from './transactionRefund';

export interface IMallTransactionReturnRequest extends ITransactionRefundRequest {
  commerceCode: string;
  buyOrder: string;
}

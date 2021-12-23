export interface ITransactionRefundResponse {
  type: 'NULLIFIED' | 'REVERSED';
  authorizationCode?: string;
  authorizationDate?: Date;
  balance?: number;
  nullifiedAmount?: number;
  responseCode?: number;
}

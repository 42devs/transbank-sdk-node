export interface ICardDetail {
  cardNumber: string;
}

export interface IDetails {
  amount: number;
  status: 'INITIALIZED' | 'AUTHORIZED' | 'REVERSED' | 'FAILED' | 'NULLIFIED' | 'PARTIALLY_NULLIFIED' | 'CAPTURED';
  authorizationCode: string;
  paymentTypeCode: 'VD' |'VN' |'VC' |'SI' |'S2' |'NC' |'VP' ;
  responseCode: 0 | -1 | -2 | -3 | -4 | -5;
  installmentsNumber: number;
  installmentsAmount: number;
  buyOrder: string;
}

export interface IMallTransactionStatusResponse {
  buyOrder: string;
  sessionId: string;
  cardDetail: ICardDetail;
  accountingDate: string;
  transactionDate: Date;
  vci: string;
  details: IDetails[];
  balance: number;
}

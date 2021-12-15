interface ICardDetails {
  cardNumber: number;
}

export interface ITransactionStatusResponse {
  vci: string;
  amount: number;
  status: 'INITIALIZED' | 'AUTHORIZED' | 'REVERSED' | 'FAILED' | 'NULLIFIED' | 'PARTIALLY_NULLIFIED' | 'CAPTURED';
  buyOrder: string;
  sessionId: string;
  cardDetail: ICardDetails;
  accountingDate: string;
  transactionDate: Date;
  authorizationCode: string;
  paymentTypeCode: 'VD' |'VN' |'VC' |'SI' |'S2' |'NC' |'VP' ;
  responseCode: 0 | -1 | -2 | -3 | -4 | -5;
  installmentsNumber: number;
  installmentsAmount: number;
  balance: number;
}

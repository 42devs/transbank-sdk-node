export interface IDetailsMallTransaction {
  amount: number;
  commerceCode: string;
  buyOrder: string;
}

export interface IMallTransactionCreateRequest {
  buyOrder: string;
  sessionId: string;
  returnUrl: string;
  details: IDetailsMallTransaction[];
}

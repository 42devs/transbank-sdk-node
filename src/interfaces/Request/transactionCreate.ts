export interface ITransactionCreateRequest {
  buyOrder: string,
  sessionId: string,
  amount: number,
  returnUrl: string,
}

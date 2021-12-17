export interface ITransactionCaptureRequest {
  buyOrder: string;
  authorizationCode: string;
  captureAmount: number;
}

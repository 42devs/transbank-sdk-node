export interface ITransactionCaptureResponse {
  token: string;
  authorizationCode: string;
  authorizationDate: Date;
  capturedAmount: number;
  responseCode: number;
}

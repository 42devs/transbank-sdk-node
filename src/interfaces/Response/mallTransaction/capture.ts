export interface IMallTransactionCaptureResponse {
  token: string;
  authorizationCode: string;
  authorizationDate: Date;
  capturedAmount: number;
  responseCode: number;
}

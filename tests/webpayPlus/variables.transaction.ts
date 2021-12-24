/* eslint-disable import/no-mutable-exports */
import {
  IOptions,
  ITransactionCommitResponse,
  ITransactionStatusResponse,
  ITransactionCreateResponse,
  ITransactionRefundResponse,
  ITransactionCaptureResponse,
  IErrorResponse,
} from '../../src/interfaces';
import { makeId } from '../helper';

const options: IOptions = {
  commerceCode: '597055555532',
  apiKey: '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
  environment: 'test',
};

let token: string;
let buyOrder: string;
let authorizationCode: string;
let url: string;
let sessionId: string;
let returnUrl: string;
let amount: 1000;
let status: ITransactionStatusResponse | ITransactionCommitResponse;
let created: ITransactionCreateResponse;
let reversed: ITransactionRefundResponse;
let nullified: ITransactionRefundResponse;
let captured: ITransactionCaptureResponse;
let error: IErrorResponse;

function setValues() {
  token = makeId(64);
  buyOrder = makeId(6);
  authorizationCode = makeId(20);
  url = 'https://webpay3gint.transbank.cl/webpayserver/initTransaction';
  returnUrl = 'http://localhost:3000/transaction/return';
  status = {
    vci: 'TSY',
    amount: 1000,
    status: 'AUTHORIZED',
    buyOrder: makeId(6),
    sessionId: makeId(10),
    cardDetail: {
      cardNumber: 1234,
    },
    accountingDate: '1221',
    transactionDate: new Date(),
    authorizationCode: '1313',
    paymentTypeCode: 'VD',
    responseCode: 0,
    installmentsAmount: 1000,
    installmentsNumber: 1,
    balance: 0,
  };

  created = {
    token,
    url,
  };

  nullified = {
    type: 'NULLIFIED',
    authorizationCode: makeId(6),
    authorizationDate: new Date(),
    nullifiedAmount: 1000.00,
    balance: 0.00,
    responseCode: 0,
  };

  reversed = {
    type: 'REVERSED',
  };

  captured = {
    token: makeId(64),
    authorizationCode: makeId(6),
    authorizationDate: new Date(),
    capturedAmount: 1000,
    responseCode: 0,
  };

  error = {
    status: 500,
  };
}

export {
  options,
  setValues,
  token,
  buyOrder,
  authorizationCode,
  url,
  sessionId,
  returnUrl,
  amount,
  status,
  created,
  reversed,
  nullified,
  captured,
  error,
};

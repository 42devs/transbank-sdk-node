/* eslint-disable import/no-mutable-exports */
import {
  IOptions,
  IErrorResponse,
  IMallTransactionCaptureResponse,
  IMallTransactionCommitResponse,
  IMallTransactionCreateResponse,
  IMallTransactionRefundResponse,
  IMallTransactionStatusResponse,
} from '../../src/interfaces';
import { IDetailsMallTransaction } from '../../src/interfaces/Request/mallTransaction/create';
import { makeId } from '../helper';

const options: IOptions = {
  commerceCode: '597055555535',
  apiKey: '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
  environment: 'test',
};

let token: string;
let buyOrder: string;
let authorizationCode: string;
let url: string;
let returnUrl: string;
let sessionId: string;
let amount: 1000;
let status: IMallTransactionStatusResponse | IMallTransactionCommitResponse;
let created: IMallTransactionCreateResponse;
let refunded: IMallTransactionRefundResponse;
let nullified: IMallTransactionRefundResponse;
let captured: IMallTransactionCaptureResponse;
let createDetails: IDetailsMallTransaction[];
let error: IErrorResponse;

function setValues() {
  token = makeId(64);
  buyOrder = makeId(6);
  authorizationCode = makeId(20);
  sessionId = makeId(12);
  url = 'https://webpay3gint.transbank.cl/webpayserver/initTransaction';
  returnUrl = 'https://localhost:3000/mallTransaction/return';
  created = {
    token,
    url,
  };
  status = {
    buyOrder,
    sessionId,
    cardDetail: {
      cardNumber: '2345',
    },
    accountingDate: '1221',
    transactionDate: new Date(),
    vci: 'TSY',
    details: [
      {
        authorizationCode,
        paymentTypeCode: 'VC',
        responseCode: 0,
        amount,
        installmentsAmount: 1000,
        installmentsNumber: 1,
        commerceCode: '597055555536',
        buyOrder,
        status: 'AUTHORIZED',
      },
    ],
    balance: 0,
  };
  refunded = {
    type: 'REVERSED',
  };
  nullified = {
    type: 'NULLIFIED',
    authorizationCode: makeId(6),
    authorizationDate: new Date(),
    nullifiedAmount: 1000.00,
    balance: 0.00,
    responseCode: 0,
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
  createDetails = [
    {
      amount,
      commerceCode: '597055555536',
      buyOrder: makeId(6),
    },
    {
      amount,
      commerceCode: '597055555537',
      buyOrder: makeId(6),
    },
  ];
}

export {
  options,
  setValues,
  token,
  buyOrder,
  authorizationCode,
  url,
  sessionId,
  amount,
  created,
  status,
  refunded,
  nullified,
  captured,
  error,
  createDetails,
  returnUrl,
};

import {
  IOptions,
  ITransactionCommitResponse,
  ITransactionStatusResponse,
  ITransactionCreateResponse,
  ITransactionRefundResponse,
  ITransactionCaptureResponse,
} from '../../src/interfaces';
import * as Transaction from '../../src/modules/webpayPlus/transaction';
import { makeId } from '../helper';

const status: ITransactionStatusResponse | ITransactionCommitResponse = {
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

const options: IOptions = {
  commerceCode: '597055555532',
  apiKey: '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
  environment: 'test',
};

const token = makeId(64);
const url = 'https://webpay3gint.transbank.cl/webpayserver/initTransaction';

const created: ITransactionCreateResponse = {
  token,
  url,
};

const refund: ITransactionRefundResponse = {
  type: 'NULLIFIED',
  authorizationCode: makeId(6),
  authorizationDate: new Date(),
  nullifiedAmount: 1000.00,
  balance: 0.00,
  responseCode: 0,
};

const nullify: ITransactionRefundResponse = {
  type: 'REVERSED',
};

const capture: ITransactionCaptureResponse = {
  token: makeId(64),
  authorizationCode: makeId(6),
  authorizationDate: new Date(),
  capturedAmount: 1000,
  responseCode: 0,
};
const buyOrder: string = makeId(6);
const authorizationCode: string = makeId(20);

jest.mock('../../src/modules/webpayPlus/transaction', () => ({
  create: jest.fn(),
  commit: jest.fn(),
  getStatus: jest.fn(),
  refund: jest.fn(),
  capture: jest.fn(),
}));

describe('Webpay Plus', () => {
  describe('Normal Transaction', () => {
    describe('Create Transaction', () => {
      const spy = jest.spyOn(Transaction, 'create')
        .mockImplementation(async () => created as ITransactionCreateResponse);
      afterAll(() => {
        spy.mockRestore();
      });
      it('OK - create transaction', async () => {
        const sessionId = makeId(10);
        const amount = 1000;
        const returnUrl = 'http://localhost:3000/transaction/return';
        const response = await Transaction.create(buyOrder, sessionId, amount, returnUrl, options);
        expect(Transaction.create).toBeCalledTimes(1);
        expect(Transaction.create).toBeCalledWith(buyOrder, sessionId, amount, returnUrl, options);
        expect(response).toBeDefined();
      });
    });
    describe('Commit Transaction', () => {
      const spy = jest.spyOn(Transaction, 'commit')
        .mockImplementation(async () => status as ITransactionCommitResponse);
      afterAll(() => {
        spy.mockRestore();
      });

      it('OK commit trasaction', async () => {
        const response = await Transaction.commit(token, options);

        expect(Transaction.commit).toBeCalledTimes(1);
        expect(Transaction.commit).toBeCalledWith(token, options);
        expect(response).toBeDefined();
      });
    });
    describe('getStatus Transaction', () => {
      const spy = jest.spyOn(Transaction, 'getStatus')
        .mockImplementation(async () => status as ITransactionStatusResponse);
      afterAll(() => {
        spy.mockRestore();
      });
      it('OK getStatus trasaction', async () => {
        const response = await Transaction.getStatus(token, options);

        expect(Transaction.getStatus).toBeCalledTimes(1);
        expect(Transaction.getStatus).toBeCalledWith(token, options);
        expect(response).toBeDefined();
      });
    });
    describe('Refund Transaction', () => {
      const spy = jest.spyOn(Transaction, 'refund')
        .mockImplementation(async () => refund as ITransactionRefundResponse);
      afterAll(() => {
        spy.mockRestore();
      });
      it('OK reverse transaction', async () => {
        const response = Transaction.refund(token, 1000.00, options);
        expect(Transaction.refund).toBeCalledTimes(1);
        expect(Transaction.refund).toBeCalledWith(token, 1000.00, options);
        expect(response).toBeDefined();
      });
      it('OK nullified transaction', async () => {
        spy.mockImplementation(async () => nullify as ITransactionRefundResponse);
        const response = Transaction.refund(token, 1000.00, options);
        expect(Transaction.refund).toBeCalledTimes(1);
        expect(Transaction.refund).toBeCalledWith(token, 1000.00, options);
        expect(response).toBeDefined();
      });
    });
    describe('Capture Transaction', () => {
      const spy = jest.spyOn(Transaction, 'capture')
        .mockImplementation(async () => capture as ITransactionCaptureResponse);
      afterAll(() => {
        spy.mockRestore();
      });
      it('OK capture amount', async () => {
        const response = Transaction.capture(token, buyOrder, authorizationCode, 1000, options);
        expect(Transaction.capture).toBeCalledTimes(1);
        expect(Transaction.capture).toBeCalledWith(
          token,
          buyOrder,
          authorizationCode,
          1000,
          options,
        );
        expect(response).toBeDefined();
      });
    });
  });
});

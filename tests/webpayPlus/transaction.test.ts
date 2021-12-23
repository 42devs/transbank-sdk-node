import {
  IOptions,
  ITransactionCommitResponse,
  ITransactionStatusResponse,
  ITransactionCreateResponse,
  ITransactionRefundResponse,
  ITransactionCaptureResponse,
  IErrorResponse,
} from '../../src/interfaces';
import {
  create, commit, getStatus, refund, capture,
} from '../../src/modules/webpayPlus/transaction';
import { request } from '../../src/utils/request';

import { makeId } from '../helper';

jest.mock('../../src/utils/request', () => ({
  request: jest.fn(),
}));

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

const setValues = () => {
  token = makeId(64);
  buyOrder = makeId(6);
  authorizationCode = makeId(20);
  url = 'https://webpay3gint.transbank.cl/webpayserver/initTransaction';
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
};
const mock = (request as jest.MockedFunction<typeof request>);

describe('Normal Transaction', () => {
  describe('Create Transaction', () => {
    beforeEach(() => {
      setValues();
      mock.mockResolvedValueOnce({ status: 200, data: created });
    });
    afterAll(() => {
      mock.mockRestore();
    });
    it('OK - create transaction', async () => {
      const response = await create(buyOrder, sessionId, amount, returnUrl, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(created);
    });
  });
  describe('Commit Transaction', () => {
    beforeEach(() => {
      setValues();
      mock.mockResolvedValueOnce({ status: 200, data: status });
    });
    afterEach(() => {
      mock.mockRestore();
    });
    it('OK commit trasaction', async () => {
      const response = await commit(token, options);

      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(status);
    });
  });
  describe('getStatus Transaction', () => {
    beforeEach(() => {
      setValues();
      mock.mockResolvedValueOnce({ status: 200, data: status });
    });
    afterEach(() => {
      mock.mockRestore();
    });

    it('OK getStatus trasaction', async () => {
      const response = await getStatus(token, options);

      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(status);
    });
  });
  describe('Refund Transaction', () => {
    beforeEach(() => {
      setValues();
      mock.mockResolvedValueOnce({ status: 200, data: reversed });
    });
    afterEach(() => {
      mock.mockRestore();
    });
    it('OK reverse transaction', async () => {
      const response = await refund(token, 1000.00, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(reversed);
    });
  });
  describe('Nullify Transaction', () => {
    beforeEach(() => {
      setValues();
      mock.mockResolvedValueOnce({ status: 200, data: nullified });
    });
    afterEach(() => {
      mock.mockRestore();
    });
    it('OK nullified transaction', async () => {
      const response = await refund(token, 100.00, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(nullified);
    });
  });
  describe('Capture Transaction', () => {
    beforeEach(() => {
      setValues();
      mock.mockResolvedValueOnce({ status: 200, data: captured });
    });
    afterEach(() => {
      mock.mockRestore();
    });

    it('OK capture amount', async () => {
      const response = await capture(token, buyOrder, authorizationCode, 1000, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(captured);
    });
  });
  describe('Error functions', () => {
    beforeEach(() => {
      mock.mockRejectedValueOnce(error);
    });
    afterEach(() => {
      mock.mockRestore();
    });
    it('Can not create request', async () => {
      const response = await create(buyOrder, sessionId, amount, returnUrl, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toHaveProperty('message');
    });
    it('Can not commit request', async () => {
      const response = await commit(token, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toHaveProperty('message');
    });
    it('Can not get status request', async () => {
      const response = await getStatus(token, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toHaveProperty('message');
    });
    it('Can not reverse transaction', async () => {
      const response = await refund(token, 1000.00, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toHaveProperty('message');
    });
    it('Can not capture request', async () => {
      const response = await capture(token, buyOrder, authorizationCode, 1000, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toHaveProperty('message');
    });
  });
});

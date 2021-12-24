import {
  create, commit, getStatus, refund, capture,
} from '../../src/modules/webpayPlus/transaction';
import { request } from '../../src/utils/request';
import {
  options,
  setValues,
  token,
  buyOrder,
  authorizationCode,
  sessionId,
  returnUrl,
  amount,
  status,
  created,
  reversed,
  nullified,
  captured,
  error,
} from './variables.transaction';

jest.mock('../../src/utils/request', () => ({
  request: jest.fn(),
}));

const mock = (request as jest.MockedFunction<typeof request>);

describe('Normal Transaction', () => {
  describe('Create Transaction', () => {
    beforeAll(() => {
      setValues();
      mock.mockResolvedValueOnce({ status: 200, data: created });
      mock.mockRejectedValueOnce(error);
    });
    afterAll(() => {
      mock.mockRestore();
    });
    it('OK create transaction', async () => {
      const response = await create(buyOrder, sessionId, amount, returnUrl, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(created);
    });
    it('Error can not create request', async () => {
      const response = await create(buyOrder, sessionId, amount, returnUrl, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toHaveProperty('message');
    });
  });
  describe('Commit Transaction', () => {
    beforeAll(() => {
      setValues();
      mock.mockResolvedValueOnce({ status: 200, data: status });
      mock.mockRejectedValueOnce(error);
    });
    afterAll(() => {
      mock.mockRestore();
    });
    it('OK commit trasaction', async () => {
      const response = await commit(token, options);

      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(status);
    });
    it('Error can not commit request', async () => {
      const response = await commit(token, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toHaveProperty('message');
    });
  });
  describe('getStatus Transaction', () => {
    beforeAll(() => {
      setValues();
      mock.mockResolvedValueOnce({ status: 200, data: status });
      mock.mockRejectedValueOnce(error);
    });
    afterAll(() => {
      mock.mockRestore();
    });

    it('OK getStatus trasaction', async () => {
      const response = await getStatus(token, options);

      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(status);
    });
    it('Error can not get status request', async () => {
      const response = await getStatus(token, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toHaveProperty('message');
    });
  });
  describe('Refund Transaction', () => {
    beforeAll(() => {
      setValues();
      mock.mockResolvedValueOnce({ status: 200, data: reversed });
      mock.mockResolvedValueOnce({ status: 200, data: nullified });
      mock.mockRejectedValueOnce(error);
    });
    afterAll(() => {
      mock.mockRestore();
    });
    it('OK reverse transaction', async () => {
      const response = await refund(token, 1000.00, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(reversed);
    });
    it('OK nullified transaction', async () => {
      const response = await refund(token, 100.00, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(nullified);
    });
    it('Error can not reverse transaction', async () => {
      const response = await refund(token, 1000.00, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toHaveProperty('message');
    });
  });
  describe('Capture Transaction', () => {
    beforeAll(() => {
      setValues();
      mock.mockResolvedValueOnce({ status: 200, data: captured });
      mock.mockRejectedValueOnce(error);
    });
    afterAll(() => {
      mock.mockRestore();
    });

    it('OK capture amount', async () => {
      const response = await capture(token, buyOrder, authorizationCode, 1000, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(captured);
    });
    it('Error can not capture request', async () => {
      const response = await capture(token, buyOrder, authorizationCode, 1000, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toHaveProperty('message');
    });
  });
});

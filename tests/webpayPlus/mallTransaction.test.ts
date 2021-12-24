import {
  create, commit, getStatus, refund, capture,
} from '../../src/modules/webpayPlus/mallTransaction';
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
  nullified,
  captured,
  error,
  createDetails as details,
  refunded,
} from './variables.mallTransaction';

jest.mock('../../src/utils/request', () => ({
  request: jest.fn(),
}));

const mock = (request as jest.MockedFunction<typeof request>);

describe('Mall Transaction', () => {
  describe('Create Mall Transaction', () => {
    beforeAll(() => {
      setValues();
      mock.mockResolvedValueOnce({ status: 200, data: created });
      mock.mockRejectedValueOnce(error);
    });
    afterAll(() => {
      mock.mockRestore();
    });
    it('OK create transaction', async () => {
      const response = await create(
        buyOrder,
        sessionId,
        returnUrl,
        details,
        options,
      );
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(created);
    });
    it('Error can not create request', async () => {
      const response = await create(
        buyOrder,
        sessionId,
        returnUrl,
        details,
        options,
      );
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toHaveProperty('message');
    });
  });
  describe('Commit mall transaction', () => {
    beforeAll(() => {
      setValues();
      mock.mockResolvedValueOnce({ status: 200, data: status });
      mock.mockRejectedValueOnce(error);
    });
    afterAll(() => {
      mock.mockRestore();
    });
    it('OK commit mall transaction', async () => {
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
  describe('Status Mall transaction', () => {
    beforeAll(() => {
      setValues();
      mock.mockResolvedValueOnce({ status: 200, data: status });
      mock.mockRejectedValueOnce(error);
    });
    afterAll(() => {
      mock.mockRestore();
    });
    it('OK get status mall transaction', async () => {
      const response = await getStatus(token, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(status);
    });
    it('Error can not get status', async () => {
      const response = await getStatus(token, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toHaveProperty('message');
    });
  });
  describe('Refund Transaction', () => {
    beforeAll(() => {
      setValues();
      mock.mockResolvedValueOnce({ status: 200, data: refunded });
      mock.mockResolvedValueOnce({ status: 200, data: nullified });
      mock.mockRejectedValueOnce(error);
    });
    afterAll(() => {
      mock.mockRestore();
    });
    it('OK refund partial transaction', async () => {
      const response = await refund(token, '597055555537', buyOrder, 100, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(refunded);
    });
    it('OK nullify transaction', async () => {
      const response = await refund(token, '597055555537', buyOrder, amount, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(nullified);
    });
    it('Error can not refund request', async () => {
      const response = await refund(token, '597055555537', buyOrder, amount, options);
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
    it('OK capture transaction', async () => {
      const response = await capture(token, '597055555537', buyOrder, authorizationCode, amount, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toBe(captured);
    });
    it('Error, can not capture request', async () => {
      const response = await capture(token, '597055555537', buyOrder, authorizationCode, amount, options);
      expect(request).toBeCalledTimes(1);
      expect(response).toBeDefined();
      expect(response).toHaveProperty('message');
    });
  });
});

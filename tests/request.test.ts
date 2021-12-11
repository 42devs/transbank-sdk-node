import { request } from '../src/utils/request';
import { IErrorResponse, IRequest, IResponse } from '../src/interfaces';

const basePayload: IRequest = {
  method: 'get',
  url: 'https://httpbin.org',
};

describe('Base Request Handler', () => {
  describe('GET method', () => {
    it('200 - OK request', async () => {
      const payload: IRequest = {
        ...basePayload,
        path: '/get',
      };
      const { code, data } = await request(payload) as IResponse;
      expect(code).toBe(200);
      expect(data).toBeDefined();
    });
    it('404 - Not Found', async () => {
      const payload: IRequest = {
        ...basePayload,
        path: '/status/404',
      };

      const c = await request(payload) as IErrorResponse;
      expect(c.code).toBe(404);
    });
    it('408 - Request Timeout', async () => {
      const payload: IRequest = {
        ...basePayload,
        path: '/get',
        timeout: 10,
      };

      const c = await request(payload) as IErrorResponse;
      expect(c.code).toBe(408);
    });
  });
  describe('POST method', () => {
    it('200 - OK request', async () => {
      const payload: IRequest = {
        ...basePayload,
        path: '/post',
        method: 'post',
        data: {
          test: 'ok',
        },
      };
      const { code, data } = await request(payload) as IResponse;
      expect(code).toBe(200);
      expect(data).toBeDefined();
    });
    it('404 - Not Found', async () => {
      const payload: IRequest = {
        ...basePayload,
        path: '/status/404',
        method: 'post',
        data: {
          test: 'ok',
        },
      };

      const c = await request(payload) as IErrorResponse;
      expect(c.code).toBe(404);
    });

    it('408 - Request Timeout', async () => {
      const payload: IRequest = {
        ...basePayload,
        path: '/post',
        method: 'post',
        timeout: 10,
        data: {
          test: 'ok',
        },
      };

      const c = await request(payload) as IErrorResponse;
      expect(c.code).toBe(408);
    });
  });
});

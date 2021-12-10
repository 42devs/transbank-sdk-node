import { request } from '../src/utils/request';
import { IRequest } from '../src/interfaces';

describe('Base Request Handler', () => {
  it('can make request', async () => {
    const payload: IRequest = {
      method: 'get',
      url: 'https://httpbin.org',
      path: '/get',
    };
    const { code } = await request(payload);
    expect(code).toBe(200);
  });
});

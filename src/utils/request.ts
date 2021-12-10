/* eslint-disable consistent-return */
import * as http from 'https';
import {
  IRequest, IResponse, IErrorResponse,
} from '~/interfaces';

export async function request(r: IRequest): Promise<IResponse|IErrorResponse> {
  try {
    const options: http.RequestOptions = {
      method: r.method,
      headers: { ...r.headers },
      timeout: 1000,
      path: r.path,
    };
    return new Promise((resolve, reject) => {
      const req = http.request(r.url, options, (res) => {
        if (res.statusCode! > 299) {
          return reject(new Error(`HTTP status code ${res.statusCode}`));
        }
        const body: Buffer[] = [];
        res.on('data', (chunk) => body.push(chunk));
        res.on('end', () => {
          const data = JSON.parse(Buffer.concat(body).toString());
          console.log(data);
          return resolve({
            code: res.statusCode!,
            data,
          });
        });
      });
      req.on('error', (err) => {
        reject(err);
      });
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });
      if (r.method === 'post' || r.method === 'put') {
        const payload = JSON.stringify(r.data);
        req.write(payload);
      }
      req.end();
    });
  } catch (e) {
    return { message: e } as IErrorResponse;
  }
}

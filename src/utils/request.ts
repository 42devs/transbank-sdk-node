/* eslint-disable consistent-return */
import * as http from 'https';
import {
  IRequest, IResponse, IErrorResponse,
} from '~/interfaces';

function canjsonParse(str: string): boolean {
  try {
    JSON.parse(str);
  } catch (error) {
    return false;
  }
  return true;
}

export async function request(r: IRequest): Promise<IResponse | IErrorResponse> {
  const options: http.RequestOptions = {
    method: r.method,
    headers: { ...r.headers },
    timeout: r.timeout || 1000,
    path: r.path,
  };
  return new Promise((resolve, reject) => {
    const req = http.request(r.url, options, (res) => {
      if (res.statusCode! > 299) {
        resolve({
          code: res.statusCode!,
          message: res.statusMessage!,
        });
      }
      const body: Buffer[] = [];
      res.on('data', (chunk) => body.push(chunk));
      res.on('end', () => {
        const data = Buffer.concat(body).toString();
        const payload: IResponse = {
          code: res.statusCode!,
          data: (canjsonParse(data)) ? JSON.parse(data) : null,
        };
        return resolve(payload);
      });
    });
    req.on('error', (err) => {
      reject(err);
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({
        code: 408,
        message: 'Request Timeout',
      });
    });
    if (r.method === 'post' || r.method === 'put') {
      const payload = JSON.stringify(r.data);
      req.write(payload);
    }
    req.end();
  });
}

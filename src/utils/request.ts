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
    };
    return new Promise((resolve, reject) => {
      const req = http.request(options, (res) => {
        if (res.statusCode! > 299) {
          return reject(new Error(`HTTP status code ${res.statusCode}`));
        }
        const body: Buffer[] = [];
        res.on('data', (chunk) => body.push(chunk));
        res.on('end', () => {
          const data = Buffer.concat(body).toJSON();
          return resolve({
            code: res.statusCode!,
            data,
          });
        });
        return reject(new Error('Could not complete the request'));
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

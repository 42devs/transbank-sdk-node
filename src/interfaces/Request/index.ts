import { ICaptureRequestData } from '~/interfaces/Request/CaptureRequestData';
import { IHeaders } from '~/interfaces/Headers';

interface ITest {
  test: string;
}
export interface IRequest {
  method: 'post'|'get'|'put'|'delete'|'patch';
  path?: string;
  headers?: IHeaders,
  data?: ICaptureRequestData | ITest;
  url: string;
  timeout?: number;
}

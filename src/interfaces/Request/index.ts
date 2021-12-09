import { ICaptureRequestData } from '~/interfaces/Request/CaptureRequestData';
import { IHeaders } from '~/interfaces/Headers';

export interface IRequest {
  method: 'post'|'get'|'put'|'delete'|'patch';
  path: string;
  headers: IHeaders,
  data?: ICaptureRequestData
}

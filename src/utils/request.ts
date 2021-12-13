/* eslint-disable consistent-return */
import axios, { AxiosError, AxiosRequestConfig as RequestConfig } from 'axios';
import {
  IRequest, IResponse, IErrorResponse,
} from '~/interfaces';
import { toUnderScoreKeys } from './stringFunctions';

function isAxiosError(candidate: any): candidate is AxiosError {
  return candidate.isAxiosError === true;
}

export async function request(req: IRequest): Promise<IResponse|IErrorResponse> {
  const payload: RequestConfig = {
    method: req.method,
    baseURL: req.url,
    url: req.path,
    headers: { ...req.headers },
    timeout: req.timeout,
  };

  if (['post', 'put', 'patch'].includes(req.method)) {
    payload.data = toUnderScoreKeys(req.body);
  }
  console.log(payload);
  try {
    const { status, data } = await axios.request(payload);
    return { status, data } as IResponse;
  } catch (error: any) {
    if (isAxiosError(error)) {
      return {
        status: error.response!.status,
        message: error.response!.statusText,
      } as IErrorResponse;
    }
    return { status: 500, message: error.message } as IErrorResponse;
  }
}

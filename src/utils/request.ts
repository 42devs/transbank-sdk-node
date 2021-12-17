/* eslint-disable consistent-return */
import axios, { AxiosError, AxiosRequestConfig as RequestConfig } from 'axios';
import {
  IRequest, IResponse, IErrorResponse,
} from '~/interfaces';
import { toCamelCaseKeys, toUnderScoreKeys } from './stringFunctions';

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
  try {
    const { status, data } = await axios
      .request(payload);
    return {
      status,
      data: toCamelCaseKeys(data),
    } as IResponse;
  } catch (error: any) {
    if (error.message.includes('timeout')) {
      return {
        status: 408,
        message: error.message,
      } as IErrorResponse;
    }
    if (isAxiosError(error)) {
      return {
        status: error.response!.status,
        message: error.response!.statusText,
      } as IErrorResponse;
    }
    return {
      status: 500,
      message: error.message,
    } as IErrorResponse;
  }
}

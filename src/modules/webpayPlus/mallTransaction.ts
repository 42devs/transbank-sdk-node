import {
  IErrorResponse,
  IMallTransactionCommitResponse,
  IMallTransactionCreateResponse,
  IMallTransactionStatusResponse,
  IOptions,
  IRequest,
  IResponse,
} from '~/interfaces';
import { IDetailsMallTransaction } from '~/interfaces/Request/mallTransactionCreate';
import { getBaseURL } from '~/utils/params';
import { request } from '~/utils/request';

/**
 *
 * @param buyOrder
 * @param sessionId
 * @param returnUrl
 * @param details
 * @param options
 * @returns IMallTransactionCreateResponse | IErrorResponse
 */
export async function create(
  buyOrder: string,
  sessionId: string,
  returnUrl: string,
  details: IDetailsMallTransaction[],
  options: IOptions,
): Promise<IMallTransactionCreateResponse | IErrorResponse> {
  try {
    const payload: IRequest = {
      url: getBaseURL(),
      method: 'post',
      path: '/rswebpaytransaction/api/webpay/v1.2/transactions',
      headers: {
        'Tbk-Api-Key-Id': options.commerceCode,
        'Content-Type': 'application/json',
        'Tbk-Api-Key-Secret': options.apiKey,
      },
      body: {
        buyOrder,
        sessionId,
        returnUrl,
        details,
      },
    };
    const { status, data } = await request(payload) as IResponse;
    if (status >= 200 && status <= 299) {
      return data as IMallTransactionCreateResponse;
    }
    throw new Error('could not complete operation');
  } catch (error: any) {
    return {
      status: error.status || 500,
      message: error.message as string,
    } as IErrorResponse;
  }
}

/**
 *
 * @param token
 * @param options
 * @returns IMallTransactionCommitResponse | IErrorResponse
 */
export async function commit(
  token: string,
  options: IOptions,
): Promise<IMallTransactionCommitResponse | IErrorResponse> {
  try {
    const payload: IRequest = {
      url: getBaseURL(),
      method: 'put',
      path: `/rswebpaytransaction/api/webpay/v1.2/transactions/${token}`,
      headers: {
        'Tbk-Api-Key-Id': options.commerceCode,
        'Content-Type': 'application/json',
        'Tbk-Api-Key-Secret': options.apiKey,
      },
    };

    const { status, data } = await request(payload) as IResponse;
    if (status >= 200 && status <= 299) {
      return data as IMallTransactionCommitResponse;
    }
    throw new Error('could not complete operation');
  } catch (error: any) {
    return {
      status: error.status || 500,
      message: error.message as string,
    } as IErrorResponse;
  }
}

/**
 *
 * @param token
 * @param options
 * @returns IMallTransactionStatusResponse | IErrorResponse
 */
export async function getStatus(
  token: string,
  options: IOptions,
): Promise<IMallTransactionStatusResponse | IErrorResponse> {
  try {
    const payload: IRequest = {
      url: getBaseURL(),
      method: 'get',
      path: `/rswebpaytransaction/api/webpay/v1.2/transactions/${token}`,
      headers: {
        'Tbk-Api-Key-Id': options.commerceCode,
        'Content-Type': 'application/json',
        'Tbk-Api-Key-Secret': options.apiKey,
      },
    };

    const { status, data } = await request(payload) as IResponse;
    if (status >= 200 && status <= 299) {
      return data as IMallTransactionStatusResponse;
    }
    throw new Error('could not complete operation');
  } catch (error: any) {
    return {
      status: error.status || 500,
      message: error.message as string,
    } as IErrorResponse;
  }
}

// export async function refund(payload: )

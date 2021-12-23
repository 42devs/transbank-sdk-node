import {
  IErrorResponse,
  IMallTransactionCommitResponse,
  IMallTransactionCreateResponse,
  IMallTransactionRefundResponse,
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
    const { data } = await request(payload) as IResponse;
    return data as IMallTransactionCreateResponse;
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

    const { data } = await request(payload) as IResponse;
    return data as IMallTransactionCommitResponse;
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

    const { data } = await request(payload) as IResponse;
    return data as IMallTransactionStatusResponse;
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
 * @param commerceCode
 * @param buyOrder
 * @param amount
 * @param options
 * @returns IMallTransactionRefundResponse | IErrorResponse
 */
export async function refund(
  token: string,
  commerceCode: string,
  buyOrder: string,
  amount: number,
  options: IOptions,
): Promise<IMallTransactionRefundResponse | IErrorResponse> {
  try {
    const payload: IRequest = {
      url: getBaseURL(),
      method: 'post',
      path: `/rswebpaytransaction/api/webpay/v1.2/transactions/${token}/refunds`,
      headers: {
        'Tbk-Api-Key-Id': options.commerceCode,
        'Content-Type': 'application/json',
        'Tbk-Api-Key-Secret': options.apiKey,
      },
      body: {
        commerceCode,
        buyOrder,
        amount,
      },
    };
    const { data } = await request(payload) as IResponse;
    return data as IMallTransactionRefundResponse;
  } catch (error: any) {
    return {
      status: error.status || 500,
      message: error.message as string,
    } as IErrorResponse;
  }
}

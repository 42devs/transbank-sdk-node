import {
  IOptions,
  IRequest,
  IResponse,
  ITransactionCreateResponse,
  IErrorResponse,
  ITransactionCommitResponse,
} from '~/interfaces';
import { getBaseURL } from '~/utils/params';
import { request } from '~/utils/request';
/**
 * Create normal transaction
 *
 * @param buyOrder string
 * @param sessionId string
 * @param amount number
 * @param returnUrl string
 * @param options IOptions
 * @returns ITransactionCreateResponse | IErrorResponse
 */
export async function create(
  buyOrder: string,
  sessionId: string,
  amount: number,
  returnUrl: string,
  options: IOptions,
): Promise<ITransactionCreateResponse | IErrorResponse> {
  try {
    const payload: IRequest = {
      url: getBaseURL(),
      path: '/rswebpaytransaction/api/webpay/v1.2/transactions',
      method: 'post',
      headers: {
        'Tbk-Api-Key-Id': options.commerceCode,
        'Content-Type': 'application/json',
        'Tbk-Api-Key-Secret': options.apiKey,
      },
      body: {
        buyOrder,
        sessionId,
        amount,
        returnUrl,
      },
    };
    const { status, data } = await request(payload) as IResponse;
    if (status >= 200 && status <= 299) {
      return data as ITransactionCreateResponse;
    }
    throw new Error('could not complete operation');
  } catch (error: any) {
    return { status: error.status || 500, message: error.message as string } as IErrorResponse;
  }
}

/**
 * commit transaction
 *
 * @param token
 * @param options
 * @returns
 */
export async function commit(
  token: string,
  options: IOptions,
): Promise<ITransactionCommitResponse | IErrorResponse> {
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
      return data as ITransactionCommitResponse;
    }
    throw new Error('could not complete operation');
  } catch (error: any) {
    return {
      status: error.status || 500,
      message: error.message as string,
    } as IErrorResponse;
  }
}

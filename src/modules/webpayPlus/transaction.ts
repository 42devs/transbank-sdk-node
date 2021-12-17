import {
  IOptions,
  IRequest,
  IResponse,
  ITransactionCreateResponse,
  IErrorResponse,
  ITransactionCommitResponse,
  ITransactionStatusResponse,
  ITransactionRefundResponse,
  ITransactionCaptureResponse,
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

/**
 * Get Transaction Status
 *
 * @param token
 * @param options
 * @returns ITransactionStatusResponse | IErrorResponse
 */
export async function getStatus(
  token: string,
  options: IOptions,
): Promise<ITransactionStatusResponse | IErrorResponse> {
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
      return data as ITransactionStatusResponse;
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
 *  reverse, or nullify transaction, also refund some balance
 *
 * @param token
 * @param amount
 * @returns ITransactionRefundResponse | IErrorResponse>
 */
export async function refund(
  token: string,
  amount: number,
  options: IOptions,
): Promise<ITransactionRefundResponse | IErrorResponse> {
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
        amount,
      },
    };

    const { status, data } = await request(payload) as IResponse;
    if (status >= 200 && status <= 299) {
      return data as ITransactionRefundResponse;
    }
    throw new Error('could not complete operation');
  } catch (error: any) {
    return {
      status: error.status || 500,
      message: error.message as string,
    } as IErrorResponse;
  }
}

export async function capture(
  token: string,
  buyOrder: string,
  authorizationCode: string,
  captureAmount: number,
  options: IOptions,
): Promise<ITransactionCaptureResponse | IErrorResponse> {
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
        buyOrder,
        authorizationCode,
        captureAmount,
      },
    };

    const { status, data } = await request(payload) as IResponse;
    if (status >= 200 && status <= 299) {
      return data as ITransactionCaptureResponse;
    }
    throw new Error('could not complete operation');
  } catch (error: any) {
    return {
      status: error.status || 500,
      message: error.message as string,
    } as IErrorResponse;
  }
}

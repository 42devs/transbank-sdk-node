import {
  IErrorResponse, IMallTransactionCreateResponse, IOptions, IRequest, IResponse,
} from '~/interfaces';
import { IDetailsMallTransaction } from '~/interfaces/Request/mallTransactionCreate';
import { getBaseURL } from '~/utils/params';
import { request } from '~/utils/request';

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

import { makeId } from '../helper';
import * as MallTransaction from '../../src/modules/webpayPlus/mallTransaction';
import { IMallTransactionCreateResponse, IOptions } from '../../src/interfaces';
import { IDetailsMallTransaction } from '../../src/interfaces/Request/mallTransactionCreate';

const token = makeId(64);
const url = 'https://webpay3gint.transbank.cl/webpayserver/initTransaction';
const options: IOptions = {
  commerceCode: '597055555535',
  apiKey: '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
  environment: 'test',
};

const created: IMallTransactionCreateResponse = {
  token,
  url,
};
jest.mock('../../src/modules/webpayPlus/mallTransaction', () => ({
  create: jest.fn(),
}));

describe('Mall Transaction', () => {
  describe('Create Mall Transaction', () => {
    const spy = jest.spyOn(MallTransaction, 'create')
      .mockImplementation((async () => created as IMallTransactionCreateResponse));
    afterAll(() => {
      spy.mockRestore();
    });
    it('OK - create transaction', async () => {
      const sessionId = makeId(10);
      const buyOrder = makeId(24);
      const returnUrl = 'http://localhost:3000/transaction/return';
      const details: IDetailsMallTransaction[] = [
        {
          commerceCode: '597055555536',
          amount: 1000,
          buyOrder: makeId(6),
        },
      ];
      const response = await MallTransaction.create(
        buyOrder,
        sessionId,
        returnUrl,
        details,
        options,
      );
      expect(MallTransaction.create).toBeCalledTimes(1);
      expect(MallTransaction.create).toBeCalledWith(
        buyOrder,
        sessionId,
        returnUrl,
        details,
        options,
      );
      expect(response).toBeDefined();
    });
  });
});

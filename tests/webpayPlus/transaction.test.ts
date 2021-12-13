import { IOptions } from '../../src/interfaces';
import { create } from '../../src/modules/webpayPlus/transaction';
import { makeId } from '../helper';

describe('Webpay Plus', () => {
  describe('Normal Transaction', () => {
    it('create transaction', async () => {
      const buyOrder = makeId(6);
      const sessionId = makeId(10);
      const amount = 1000;
      const returnUrl = 'http://localhost:3000/transaction/return';
      const options: IOptions = {
        commerceCode: '597055555532',
        apiKey: '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
        environment: 'test',
      };

      const response = await create(buyOrder, sessionId, amount, returnUrl, options);
      console.log(response);
      expect(response).toBeDefined();
    });
  });
});

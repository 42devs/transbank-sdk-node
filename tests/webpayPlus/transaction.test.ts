import { IOptions, ITransactionCommitResponse } from '../../src/interfaces';
import * as Transaction from '../../src/modules/webpayPlus/transaction';
import { makeId } from '../helper';

describe('Webpay Plus', () => {
  describe('Normal Transaction', () => {
    it('OK - create transaction', async () => {
      const buyOrder = makeId(6);
      const sessionId = makeId(10);
      const amount = 1000;
      const returnUrl = 'http://localhost:3000/transaction/return';
      const options: IOptions = {
        commerceCode: '597055555532',
        apiKey: '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
        environment: 'test',
      };
      const response = await Transaction.create(buyOrder, sessionId, amount, returnUrl, options);
      expect(response).toBeDefined();
      expect(response).toHaveProperty('token');
    });
    it('Error - Can not make request', async () => {
      const buyOrder = makeId(6);
      const sessionId = makeId(10);
      const amount = 1000;
      const returnUrl = 'http://localhost:3000/transaction/return';
      const options: IOptions = {
        commerceCode: '59705a555532',
        apiKey: '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
        environment: 'test',
      };
      const response = await Transaction.create(buyOrder, sessionId, amount, returnUrl, options);
      expect(response).toHaveProperty('message');
    });
    it('OK commit trasaction', async () => {
      const status: ITransactionCommitResponse = {
        vci: 'TSY',
        amount: 1000,
        status: 'AUTHORIZED',
        buyOrder: makeId(6),
        sessionId: makeId(10),
        cardDetail: {
          cardNumber: 1234,
        },
        accountingDate: '1221',
        transactionDate: new Date(),
        authorizationCode: '1313',
        paymentTypeCode: 'VD',
        responseCode: 0,
        installmentsAmount: 1000,
        installmentsNumber: 1,
        balance: 0,
      };

      const options: IOptions = {
        commerceCode: '597055555532',
        apiKey: '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
        environment: 'test',
      };
      const token = makeId(32);
      jest
        .spyOn(Transaction, 'commit')
        .mockResolvedValue(status);
      // .mockImplementation(async () => (status));
      const response = await Transaction.commit(token, options);

      expect(Transaction.commit).toBeCalledTimes(1);
      expect(Transaction.commit).toBeCalledWith(token, options);
      expect(response).toBeDefined();
    });
  });
});

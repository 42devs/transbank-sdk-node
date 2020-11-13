const WebpayPlus = require('./webpayPlus');
const request = require('../utils/request');


// global constants
const createPath = '/rswebpaytransaction/api/webpay/v1.0/transactions';
const commitPath = '/rswebpaytransaction/api/webpay/v1.0/transactions';
const refundPath = '/rswebpaytransaction/api/webpay/v1.0/transactions/$TOKEN$/refunds';
const getPath = '/rswebpaytransaction/api/webpay/v1.0/transactions/$TOKEN$';
const capturePath = '/rswebpaytransaction/api/webpay/v1.0/transactions/$TOKEN$/capture';


class MallTransaction extends WebpayPlus {
  async create(buyOrder, sessionId, returnUrl, details) {
    try {
      const payload = JSON.stringify({
        session_id: sessionId,
        buy_order: buyOrder,
        details,
        return_url: returnUrl,
      });

      const headers = {
        'Tbk-Api-Key-Id': this.commerceCode,
        'Tbk-Api-Key-Secret': this.apiKey,
        'Content-Type': 'application/json',
        'Content-Length': payload.length,
      };

      const options = {
        host: this.integrationType,
        path: createPath,
        method: 'POST',
        headers,
      };

      const { status, body } = await request(options, payload);

      return { status, body };
    } catch (e) {
      throw new Error(e);
    }
  }

  async commit(token) {
    try {
      const headers = {
        'Tbk-Api-Key-Id': this.commerceCode,
        'Tbk-Api-Key-Secret': this.apiKey,
      };

      const options = {
        host: this.integrationType,
        path: commitPath.replace('$TOKENS', token),
        method: 'PUT',
        headers,
      };

      const { status, body } = await request(options);

      return { status, body };
    } catch (e) {
      throw new Error(e);
    }
  }

  async refund(token, buyOrder, childCommerceCode, amount) {
    try {
      const payload = {
        buy_order: buyOrder,
        commerce_code: childCommerceCode,
        amount,
      };

      const headers = {
        'Tbk-Api-Key-Id': this.commerceCode,
        'Tbk-Api-Key-Secret': this.apiKey,
        'Content-Type': 'application/json',
        'Content-Length': payload.length,
      };

      const options = {
        host: this.integrationType,
        path: refundPath.replace('$TOKENS', token),
        method: 'POST',
        headers,
      };

      const { status, body } = await request(options, payload);

      return { status, body };
    } catch (e) {
      throw new Error(e);
    }
  }

  async capture(childCommerceCode, token, buyOrder, authorizationCode, amount) {
    try {
      const payload = JSON.stringify({
        buy_order: buyOrder,
        authorization_code: authorizationCode,
        capture_amount: amount,
      });

      const headers = {
        'Tbk-Api-Key-Id': this.commerceCode,
        'Tbk-Api-Key-Secret': this.apiKey,
        'Content-Type': 'application/json',
        'Content-Length': payload.length,
      };

      const options = {
        host: this.integrationType,
        path: capturePath.replace('$TOKEN$', token),
        method: 'POST',
        headers,
      };

      const { status, body } = await request(options, payload);

      return { status, body };
    } catch (e) {
      throw new Error(e);
    }
  }

  async getStatus(token) {
    try {
      const headers = {
        'Tbk-Api-Key-Id': this.commerceCode,
        'Tbk-Api-Key-Secret': this.apiKey,
      };

      const options = {
        host: this.integrationType,
        path: getPath.replace('$TOKENS', token),
        method: 'GET',
        headers,
      };

      const { status, body } = await request(options);

      return { status, body };
    } catch (e) {
      throw new Error(e);
    }
  }
}


module.exports = MallTransaction;

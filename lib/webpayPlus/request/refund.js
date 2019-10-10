const Validator = require('schema-validator');

const req = require('../../../utils/request');
const schema = require('../schemas');
const exception = require('../../exceptions');

const apiUrl = 'rswebpaytransaction/api/webpay/v1.0/transactions/';

module.exports = async (token, amount, opts) => {
  try {
    const url = apiUrl + token;
    const payload = {
      amount,
    };
    const reqValidator = new Validator(schema.request.refund);
    const resValidator = new Validator(schema.response.refund);
    const request = req(opts);

    if (!reqValidator.check(payload)) {
      return exception.refund();
    }
    const { data } = request.post(url, payload);
    if (!resValidator.check(data)) {
      return exception.refund();
    }
    return data;
  } catch (e) {
    return exception.refund(e.response.code, e.response.data.error_message);
  }
};

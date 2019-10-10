const Validator = require('schema-validator');

const req = require('../../../utils/request');
const schema = require('../schemas');
const exception = require('../../exceptions');

const apiUrl = 'rswebpaytransaction/api/webpay/v1.0/transactions/';

module.exports = async (token, opts) => {
  try {
    const resValidator = new Validator(schema.response.status);

    const request = req(opts);
    const { data } = await request.get(apiUrl + token);

    if (!resValidator.check(data)) {
      return exception.status('00', 'Response is not a valid schema');
    }
    return data;
  } catch (e) {
    return exception.status(e.response.status, e.response.data.error_message);
  }
};

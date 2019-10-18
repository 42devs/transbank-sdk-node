require('axios-debug-log');

const Validator = require('schema-validator');

const schema = require('../schemas');
const exception = require('../../exceptions');
const req = require('../../../utils/request');

const apiUrl = 'rswebpaytransaction/api/webpay/v1.0/transactions';

module.exports = async (obj, opts) => {
  try {
    const reqValidator = new Validator(schema.request.create);
    const resValidator = new Validator(schema.response.create);

    const request = req(opts);
    if (!reqValidator.check(obj)) {
      return exception.create('00', 'the data is not compatible with schema');
    }
    const { data } = await request.post(apiUrl, obj);
    if (!resValidator.check(data)) {
      return exception.create('00', 'the data is not compatible with schema');
    }
    return data;
  } catch (e) {
    console.error('axios', e);
    return exception.create(e.response.status, e.response.data.error_message);
  }
};

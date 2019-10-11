const Validator = require('schema-validator');

const schema = require('../schemas');
const exception = require('../../exceptions');
const req = require('../../../utils/request');

const apiUrl = 'rswebpaytransaction/api/webpay/v1.0/transactions';

module.exports = async (obj, opts) => {
  try {
    obj.details.forEach((line) => {
      if (!opts.childCommerceCodes.includes(line.commerce_code)) {
        return exception.create('00', 'invalid commerce code');
      }
      return true;
    });
    const reqValidator = new Validator(schema.request.create);
    const resValidator = new Validator(schema.response.create);
    const request = req(opts);

    if (!reqValidator.check(obj)) {
      return exception.create('00', 'the data is not compatible with schema');
    }

    const { data } = request.post(apiUrl, obj);

    if (!resValidator.check(data)) {
      return exception.create('00', 'the data is not compatible with schema');
    }

    return data;
  } catch (e) {
    return exception.create(e.response.status, e.response.data.error_message);
  }
};

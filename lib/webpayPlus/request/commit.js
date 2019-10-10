const Validator = require('schema-validator');

const req = require('../../../utils/request');
const schema = require('../schemas');
const exception = require('../../exceptions');

const apiUrl = 'rswebpaytransaction/api/webpay/v1.0/transactions/';

// eslint-disable-next-line consistent-return
module.exports = async (token, opts) => {
  try {
    const resValidator = new Validator(schema.response.commit);
    const request = req(opts);
    const { data } = await request.put(apiUrl + token);

    if (!resValidator.check(data)) {
      return exception.commit('00', 'the data is not compatible with schema');
    }
    return data;
  } catch (e) {
    return exception.commit(e.response.status, e.response.data.error_message);
  }
};

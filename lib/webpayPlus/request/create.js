const Validator = require('schema-validator');

const schema = require('../schemas/request/create');
const apiUrl = 'rswebpaytransaction/api/webpay/v1.0/transactions';
const req = require('../../../utils/request');

module.exports = async (obj, opts) => {
  try {
    const validator = new Validator(schema);
    const request = req(opts);
    console.log('validator', validator.check(obj));
    if (validator.check(obj)) {
      const { data } = await request.post(apiUrl, obj);
      console.log('data', data);
    }
  } catch(e) {
    console.log('error', e);
    throw new Error('Error! ' + e);
  }
};

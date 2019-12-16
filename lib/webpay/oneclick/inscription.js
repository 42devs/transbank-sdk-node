const request = require('../../request');
const responses = require('./responseSchema').transactions;
const requests = require('./requestSchema').transactions;
const utils = require('../../utils');
const { createOptions } = require('../options');

const endpoint = '/rswebpaytransaction/api/oneclick/v1.0/inscriptions';

exports.start = async (payload, options = null) => {
  const opts = createOptions(options);
  try {
    requests.start.validate(payload);
    if (requests.start.isValid()) throw Error(requests.start.validationErrors());

    const response = await request(
      endpoint,
      payload,
      opts,
      'POST',
    );

    const toValidate = utils.validateResponse(response);

    responses.start.validate(toValidate);
    if (!responses.start.isValid()) throw Error(responses.start.validationErrors());
    return toValidate;
  } catch (e) {
    throw new Error(e);
  }
};

exports.finish = async (token, options = null) => {
  const opts = createOptions(options);
  try {
    const response = await request(
      `${endpoint}/${token}`,
      null,
      opts,
      'PUT',
    );
    const toValidate = utils.validateResponse(response);

    responses.start.validate(toValidate);
    if (!responses.start.isValid()) throw Error(responses.start.validationErrors());
    return toValidate;
  } catch (e) {
    throw new Error(e);
  }
};

exports.delete = async (payload, options = null) => {
  const opts = createOptions(options);
  try {
    requests.delete.validate(payload);
    if (!requests.delete.isValid()) throw Error(requests.delete.validationErrors());

    const response = await request(
      endpoint,
      payload,
      opts,
      'DELETE',
    );
    const toValidate = utils.validateResponse(response);

    return toValidate;
  } catch (e) {
    throw new Error(e);
  }
};

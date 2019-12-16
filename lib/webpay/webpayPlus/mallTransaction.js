const request = require('../../request');

const responses = require('./responseSchema').mallTransactions;

const requests = require('./requestSchema').transactions;

const { createOptions } = require('../options');

const utils = require('../../utils');

const endpoint = '/rswebpaytransaction/api/webpay/v1.0/transactions';

exports.create = async (
  payload,
  options = null,
) => {
  const opts = createOptions(options);
  try {
    requests.create.validate(payload);
    if (!request.create.isValid()) throw Error(requests.create.validationErrors());

    const response = await request(
      endpoint,
      payload,
      opts,
      'POST',
    );
    const toValidate = utils.validateResponse(response);

    responses.create.validate(toValidate);
    if (!responses.create.isValid()) throw Error(responses.create.validationErrors());

    return toValidate;
  } catch (e) {
    throw new Error(e);
  }
};

exports.commit = async (
  token,
  options = null,
) => {
  const opts = createOptions(options);
  try {
    const response = await request(
      `${endpoint}/${token}`,
      null,
      opts,
      'PUT',
    );

    const toValidate = utils.validateResponse(response);

    responses.commit.validate(toValidate);

    if (!responses.commit.isValid()) throw Error(responses.commit.validationErrors());

    return toValidate;
  } catch (e) {
    throw new Error(e);
  }
};

exports.status = async (
  token,
  options = null,
) => {
  const opts = createOptions(options);
  try {
    const response = await request(
      `${endpoint}/${token}`,
      null,
      opts,
      'GET',
    );
    const toValidate = utils.validateResponse(response);

    responses.status.validate(toValidate);

    if (!responses.status.isValid()) throw Error(responses.status.validationErrors());

    return toValidate;
  } catch (e) {
    throw new Error(e);
  }
};

exports.refund = async (token, payload, options = null) => {
  const opts = createOptions(options);
  try {
    requests.refund.validate(payload);
    if (!requests.refund.isValid()) throw Error(requests.refund.validationErrors());

    const response = await request(
      `${endpoint}/${token}/refunds`,
      payload,
      opts,
      'POST',
    );
    const toValidate = utils.validateResponse(response);

    responses.refund.validate(toValidate);

    if (!responses.refund.isValid()) throw Error(responses.refund.validationErrors());

    return toValidate;
  } catch (e) {
    throw new Error(e);
  }
};

exports.capture = async (token, payload, options = null) => {
  const opts = createOptions(options);
  try {
    requests.capture.validate(payload);

    if (!requests.capture.isValid()) throw Error(requests.capture.validationErrors());

    const response = await request(
      `${endpoint}/${token}/capture`,
      payload,
      opts,
      'PUT',
    );

    const toValidate = utils.validateResponse(response);

    responses.capture.validate(toValidate);

    if (!responses.capture.isValid()) throw Error(responses.capture.validationErrors());

    return toValidate;
  } catch (e) {
    throw new Error(e);
  }
};

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
  const req = new requests.Create(payload);
  if (req.isErrors()) throw Error(req.getErrors());
  try {
    const response = await request(
      endpoint,
      payload,
      opts,
      'POST',
    );
    const toValidate = utils.validateResponse(response);
    const res = new responses.Create(toValidate);

    if (res.isErrors()) throw Error(res.getErrors());

    return res;
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

    const res = new responses.Commit(toValidate);

    if (res.isErrors()) throw Error(res.getErrors());

    return res;
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

    const res = new responses.Status(toValidate);

    if (res.isErrors()) throw Error(res.getErrors());

    return res;
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

    const res = new responses.Refund(toValidate);

    if (res.isErrors()) throw Error(res.getErrors());

    return res;
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

    const res = new responses.Capture(toValidate);
    if (res.isErrors()) throw Error(res.getErrors());

    return res;
  } catch (e) {
    throw new Error(e);
  }
};

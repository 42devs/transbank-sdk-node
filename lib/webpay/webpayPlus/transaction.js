const request = require('../../request');

const {
  createSchema,
  commitSchema,
  statusSchema,
  refundSchema,
  captureSchema,
} = require('./responseSchema');

const { createOptions } = require('../options');

const utils = require('../../utils');

const endpoint = '/rswebpaytransaction/api/webpay/v1.0/transactions';

exports.create = async (
  buyOrder,
  sessionId,
  amount,
  returnUrl,
  options = null,
) => {
  const opts = createOptions(options);
  const payload = {
    buy_order: buyOrder,
    session_id: sessionId,
    amount,
    return_url: returnUrl,
  };

  try {
    const response = await request(
      endpoint,
      payload,
      opts,
      'POST',
    );
    const { status } = response;
    const toValidate = utils.validateResponse(response);

    createSchema.validate(toValidate);
    if (!createSchema.isValid()) {
      throw Error(createSchema.validationErrors(status));
    }
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
    const { status } = response;
    const toValidate = utils.validateResponse(response);

    commitSchema.validate(toValidate);

    if (!commitSchema.isValid()) {
      throw Error(commitSchema.validationErrors(status));
    }

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
    const { status } = response;
    const toValidate = utils.validateResponse(response);

    statusSchema.validate(toValidate);

    if (!statusSchema.isValid()) {
      throw Error(statusSchema.validationErrors(status));
    }

    return toValidate;
  } catch (e) {
    throw new Error(e);
  }
};

exports.refund = async (token, amount, options = null) => {
  const opts = createOptions(options);
  try {
    const payload = {
      amount,
    };
    const response = await request(
      `${endpoint}/${token}/refunds`,
      payload,
      opts,
      'POST',
    );
    const { status } = response;
    const toValidate = utils.validateResponse(response);

    refundSchema.validate(toValidate);

    if (!refundSchema.isValid()) {
      throw Error(refundSchema.validationErrors(status));
    }

    return toValidate;
  } catch (e) {
    throw new Error(e);
  }
};

exports.capture = async (
  token,
  buyOrder,
  authorizationCode,
  captureAmount,
  options = null,
) => {
  const opts = createOptions(options);
  try {
    const payload = {
      buy_order: buyOrder,
      authorization_code: authorizationCode,
      capture_amount: captureAmount,
    };
    const response = await request(
      `${endpoint}/${token}/capture`,
      payload,
      opts,
      'PUT',
    );
    const { status } = response;
    const toValidate = utils.validateResponse(response);

    captureSchema.validate(toValidate);

    if (!captureSchema.isValid()) {
      throw Error(captureSchema.validationErrors(status));
    }

    return toValidate;
  } catch (e) {
    throw new Error(e);
  }
};

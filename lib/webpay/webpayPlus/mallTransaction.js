const request = require('../../request');

const {
  createMallSchema,
  commitMallSchema,
  statusMallSchema,
  refundMallSchema,
  captureMallSchema,
} = require('./responseSchema');

const { createOptions } = require('../options');

const utils = require('../../utils');

const endpoint = '/rswebpaytransaction/api/webpay/v1.0/transactions';

exports.create = async (
  buyOrder,
  sessionId,
  returnUrl,
  details,
  options = null,
) => {
  const opts = createOptions(options);
  try {
    const payload = {
      buy_order: buyOrder,
      session_id: sessionId,
      details,
      return_url: returnUrl,
    };

    const response = await request(
      endpoint,
      payload,
      opts,
      'POST',
    );
    const { status } = response;
    const toValidate = utils.validateResponse(response);

    createMallSchema.validate(toValidate);
    if (!createMallSchema.isValid()) {
      throw Error(createMallSchema.validationErrors(status));
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

    commitMallSchema.validate(toValidate);

    if (!commitMallSchema.isValid()) {
      throw Error(commitMallSchema.validationErrors(status));
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

    statusMallSchema.validate(toValidate);

    if (!statusMallSchema.isValid()) {
      throw Error(statusMallSchema.validationErrors(status));
    }

    return toValidate;
  } catch (e) {
    throw new Error(e);
  }
};

exports.refund = async (
  token,
  buyOrder,
  childCommerceCode,
  amount,
  options = null,
) => {
  const opts = createOptions(options);
  try {
    const payload = {
      buy_order: buyOrder,
      commerce_code: childCommerceCode,
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

    refundMallSchema.validate(toValidate);

    if (!refundMallSchema.isValid()) {
      throw Error(refundMallSchema.validationErrors(status));
    }

    return toValidate;
  } catch (e) {
    throw new Error(e);
  }
};

exports.capture = async (
  childCommerceCode,
  token,
  buyOrder,
  authorizationCode,
  captureAmount,
  options = null,
) => {
  const opts = createOptions(options);
  try {
    const payload = {
      commerce_code: childCommerceCode,
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

    captureMallSchema.validate(toValidate);

    if (!captureMallSchema.isValid()) {
      throw Error(captureMallSchema.validationErrors(status));
    }

    return toValidate;
  } catch (e) {
    throw new Error(e);
  }
};

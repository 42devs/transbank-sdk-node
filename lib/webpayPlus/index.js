const params = require('../../utils/defaultParams');
const request = require('./request');

const opts = (options) => {
  if(options !== '') {
    return {
      baseURL: options.integrationTypeUrl[options.integrationType],
      apiKey: options.apiKey,
      commerceCode: options.commerceCode,
    };
  }
  return {
    baseURL: params.webpay.integrationTypeUrl.TEST,
    apiKey: params.webpay.apiKey,
    commerceCode: params.webpay.normal.commerceCode,
  };
};

const create = (
  buyOrder,
  sessionId,
  amount,
  returnUrl,
  options = '',
) => {
  const obj = {
    buy_order: buyOrder,
    session_id: sessionId,
    amount,
    return_url: returnUrl,
  };
  return request.create(obj, opts(options));
};

const commit = (token, options = '') => request.commit(token, opts(options));

const status = (token, options = '') => request.status(token, opts(options));

const refund = (token, amount, options = '') => request.refund(token, amount, opts(options));

module.exports = {
  create,
  commit,
  status,
  refund,
};

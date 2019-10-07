const params = require('../../utils/defaultParams');
const request = require('./request');

const opts = (options) => {
  if(options !== ''){
    return {
      baseURL: options.integrationTypeUrl[options.integrationType],
      apiKey: options.apiKey,
      commerceCode: options.commerceCode,
    };
  }
  return {
    baseURL: params.webpay.integrationTypeUrl['TEST'],
    apiKey: params.webpay.apiKey,
    commerceCode: params.webpay.normal.commerceCode,
  };
};

const create = (buyOrder, sessionId, amount, returnUrl, options = '') => {
  const obj = {
    buy_order: buyOrder,
    session_id: sessionId,
    amount,
    return_url: returnUrl,
  };

  return request.create(obj, opts(options));

};


module.exports = {
  create,
};

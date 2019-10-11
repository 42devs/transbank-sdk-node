const params = require('../../utils/defaultParams');
const request = require('./request');

const opts = (options) => {
  if (options !== '') {
    return {
      baseUrl: options.integrationTypeUrl[options.integrationType],
      apiKey: options.apiKey,
      commerceCode: options.commerceCode,
      childCommerceCodes: options.childCommerceCodes,
    };
  }
  return {
    baseUrl: params.webpay.integrationTypeUrl.TEST,
    apiKey: params.webpay.apiKey,
    commerceCode: params.webpay.mall.commerceCode,
    childCommerceCodes: params.webpay.mall.childCommerceCodes,
  };
};

const create = (
  buyOrder,
  sessionId,
  returnUrl,
  details,
  options = '',
) => {
  const obj = {
    buy_order: buyOrder,
    session_id: sessionId,
    return_url: returnUrl,
    details,
  };
  return request.create(obj, opts(options));
};

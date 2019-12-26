const defaultData = require('../defaultData');

const createOptions = (opts = null) => {
  const commerceCode = (opts !== null) ? opts.commerceCode : defaultData.webpayPlus.commerceCode;
  const apiKey = (opts !== null) ? opts.apiKey : defaultData.webpayPlus.apiKey;
  let baseURL = (opts !== null && opts.test === false)
    ? defaultData.webpayPlus.baseURL.prod
    : defaultData.webpayPlus.baseURL.test;
  if (typeof opts.proxy !== 'undefined' && opts.proxy !== null) {
    baseURL = opts.proxy;
  }
  const header = {
    baseURL,
    apiKeyHeaderName: 'Tbk-Api-Key-Secret',
    commerceCodeHeaderName: 'Tbk-Api-Key-Id',
    apiKeyHeaderValue: apiKey,
    commerceCodeHeaderValue: commerceCode,
  };
  return header;
};


module.exports = {
  createOptions,
};

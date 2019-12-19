const defaultData = require('../defaultData');

const createOptions = (opts = null) => {
  const commerceCode = (opts !== null) ? opts.commerceCode : defaultData.webpayPlus.commerceCode;
  const apiKey = (opts !== null) ? opts.apiKey : defaultData.webpayPlus.apiKey;
  const baseURL = (opts !== null || opts.test === true)
    ? defaultData.webpayPlus.baseURL.prod
    : defaultData.webpayPlus.baseURL.test;
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

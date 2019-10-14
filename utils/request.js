const axios = require('axios');

module.exports = (opts) => {
  if (!('commerce' in opts)) {
    return axios.create({
      baseURL: opts.baseURL,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8',
        'Tbk-Api-Key-Id': opts.commerceCode,
        'Tbk-Api-Key-Secret': opts.apiKey,
      },
    });
  }
  return axios.create({
    baseURL: opts.baseURL,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: opts.apiKey,
      commerceCode: opts.commerceCode,
    },
  });
};

const axios = require('axios');

module.exports = (opts) => (!('commerce' in opts) ? axios.create({
  baseURL: opts.baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Tbk-Api-Key-Id': opts.commerceCode,
    'Tbk-Api-Key-Secret': opts.apiKey,
  },
}) : axios.create({
  baseURL: opts.baseURL,
  headers: {
    Authorization: opts.apiKey,
    commerceCode: opts.commerceCode,
  },
}));

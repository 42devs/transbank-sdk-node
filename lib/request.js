const axios = require('axios');

module.exports = async (path, body, opts, method = 'GET') => {
  const payload = JSON.stringify(body);

  const headers = {
    'Content-Type': 'application/json',
    'Content-Length': payload.length,
    Connection: 'keep-alive',
  };
  headers[opts.apiKeyHeaderName] = opts.apiKeyHeaderValue;
  headers[opts.commerceCodeHeaderName] = opts.commerceCodeHeaderValue;

  const options = {
    baseURL: opts.baseURL,
    method: method.toUpperCase(),
    url: path,
    headers,
  };
  if (options.method !== 'GET' && body !== null) {
    options.data = payload;
  }

  try {
    const response = await axios(options);
    return response;
  } catch (e) {
    return e;
  }
};

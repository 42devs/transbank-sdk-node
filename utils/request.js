const axios = require('axios');
require('axios-debug')(axios);

module.exports = (opts) => {
    if (!('commerce' in opts)) {
        return axios.create({
            baseURL: opts.baseURL,
            headers: {
                'content-type': 'application/json',
                'Tbk-Api-Key-Id': opts.commerceCode,
                'Tbk-Api-Key-Secret': opts.apiKey,
            },
        });
    }
    return axios.create({
        baseURL: opts.baseURL,
        headers: {
            'Authorization': opts.apiKey,
            'commerceCode': opts.commerceCode,
        },
    });
};

const axios = require('axios');
require('axios-debug')(axios);

module.exports = (opts) => {
    if (!('commerce' in opts)) {
        return axios.create({
            baseURL: opts.baseURL,
            headers: {
                'content-type': 'application/json',
                'Tbk-Api-Key-Id': opts.apiKey,
                'Tbk-Api-Key-Secret': opts.commerceCode,
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

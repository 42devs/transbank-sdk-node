const https = require('https');

module.exports = ((urlOptions, data) => new Promise((resolve, reject) => {
  const req = https.request(urlOptions, (res) => {
    let body = '';
    res.on('data', (chunk) => {
      body += chunk.toString();
    });
    res.on('error', reject);
    res.on('end', () => {
      if (res.statusCode >= 200 && res.statusCode <= 299) {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body,
        });
      } else {
        reject(`Request failed. status: ${res.statusCode}, body: ${body}`); // eslint-disable-line
      }
    });
  });
  req.on('error', reject);
  req.write(data, 'binary');
  req.end();
}));

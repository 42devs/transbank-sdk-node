const axios = require('axios');
const FormData = require('form-data');

module.exports = async (token, url) => {
  const formData = new FormData();
  formData.append('token', token);
  const webpage = await axios({
    method: 'post',
    url,
    data: formData,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  });
  return webpage;
};

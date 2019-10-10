const exceptions = require('./main');

module.exports = (code = '0', message = '') => {
  if (code.toString() === '0' || code === '' || message === '') {
    return exceptions;
  }
  return {
    type: 'Commit Exception',
    code,
    message,
  };
};

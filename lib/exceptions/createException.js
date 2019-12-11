const defaultMessage = 'Transaction could not be created. Please verify given parameters';

module.exports = (message = defaultMessage, code = 0) => {
  const error = new Error(message, code);
  return error;
};

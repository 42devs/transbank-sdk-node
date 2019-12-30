exports.validateResponse = (response) => {
  const { status, statusText, data } = response;
  if (status !== 200 && status !== 204) {
    let message = `Could not obtain a response from the service: ${statusText} (HTTP code: ${status})`;
    if ('error_message' in data) {
      message = `${message}. Detail: ${data.error_message}`;
    }
    throw Error(message, status);
  }
  return response.data;
};

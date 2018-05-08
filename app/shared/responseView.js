const getResponse = success => (data, message = '') => ({
  response_status: success ? 'success' : 'error',
  response_data: data,
  response_message: message,
});

const successResp = getResponse(true);
const errorResp = getResponse(false);

module.exports = {
  successResp,
  errorResp,
};

const { errorResp } = require('./errorHandler');

const errorHandler = (err, req, res, next) => {
  console.log('errorHandler', err);
  res.status(500).send(errorResp());
};

module.exports = errorHandler;

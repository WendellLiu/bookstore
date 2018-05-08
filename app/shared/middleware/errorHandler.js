const { errorResp } = require('../responseView');

const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).send(errorResp(null, 'system error'));
};

module.exports = errorHandler;

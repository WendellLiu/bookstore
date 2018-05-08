const { errorResp } = require('../responseView');

const errorHandler = (err, req, res, next) => res.status(500).send(errorResp());

module.exports = errorHandler;

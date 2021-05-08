const logger = require("pino")();

function requestLogger(req, res, next) {
  logger.info(req);
  next();
}

function responseFunction(res, data, err) {
  if (err) {
    return res.status(400).json({
      status: true,
      error: err,
    });
  } else {
    return res.json({
      status: false,
      data,
    });
  }
}

module.exports = {
  requestLogger,
  responseFunction,
};

const statusCodes = require('../dictionary/statusCode');

const errorHandler = (err, req, res, _next) => {
  const { message, status } = err;
  if (status) {
    return res.status(statusCodes[status]).json({ message });
  }
  console.log(err);
  console.log({ message });
  return res.status(statusCodes.serverError).json({ message: 'something went wrong' });
};

module.exports = errorHandler;
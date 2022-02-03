const errorHandler = (err, req, res, _next) => {
  const { message, code } = err;
  if (code) {
    return res.status(code).json({ message });
  }
  return res.status(500).json({ message: 'something went wrong ' });
};

module.exports = errorHandler;
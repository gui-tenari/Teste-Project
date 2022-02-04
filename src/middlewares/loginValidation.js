const loginSchema = require('../schemas/loginSchema');

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;

  const { error } = loginSchema.validate({ email, password });
  if (error) {
    return next({
      status: 'badRequest',
      message: error.message,
    });
  }
  return next();
};

module.exports = loginValidation;
const userInfoSchema = require('../schemas/userInfoSchema');

const userInfoValidation = (req, res, next) => {
  const userInfo = req.body;
  const { error } = userInfoSchema.validate(userInfo);
  if (error) {
    return next({ 
      status: 'badRequest', 
      message: error.message,
    });
  }

  return next();
};

module.exports = userInfoValidation;
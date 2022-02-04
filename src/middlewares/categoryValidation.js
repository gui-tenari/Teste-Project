const categorySchema = require('../schemas/categorySchema');

const categoryValidation = (req, res, next) => {
  const { name } = req.body;
  const { error } = categorySchema.validate({ name });

  if (error) {
 return next({
    status: 'badRequest',
    message: error.message,
  }); 
}
  return next();
};

module.exports = categoryValidation;
const blogPostSchema = require('../schemas/blogPostSchema');

const blogPostValidation = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { error } = blogPostSchema.validate({ title, content, categoryIds });

  if (error) {
    return next({
      status: 'badRequest',
      message: error.message,
    }); 
  }
  req.body.updated = new Date(Date.now());
  req.body.published = new Date(Date.now());

  return next();
};

module.exports = blogPostValidation;
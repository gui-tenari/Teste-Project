const blogPostsServices = require('../../services/blogPosts/index');
const statusCode = require('../../dictionary/statusCode');

const getBlogPosts = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const blogPosts = await blogPostsServices.getBlogPosts(authorization);
    return res.status(statusCode.success).json(blogPosts);
  } catch (error) {
    next(error);
  }
};

module.exports = { getBlogPosts };
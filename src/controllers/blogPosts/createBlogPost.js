const blogPostServices = require('../../services/blogPosts/index');
const statusCode = require('../../dictionary/statusCode');

const createBlogPost = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const blogPost = req.body;
    const newBlogPost = await blogPostServices.createBlogPost(blogPost, authorization);
    return res.status(statusCode.created).json(newBlogPost);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBlogPost,
};
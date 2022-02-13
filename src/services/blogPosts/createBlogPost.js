const { BlogPost, Category, User } = require('../../models');
const validateToken = require('../token/validateToken');
const errorConstructor = require('../../helpers/errorConstructor');

const validateCategories = async (ids) => {
  const isValidIds = ids.map((id) => Category.findByPk(id));
  const verifiedIds = await Promise.all(isValidIds);
  verifiedIds.forEach((category) => {
    if (!category) throw errorConstructor('badRequest', '"categoryIds" not found');
  });
};

const createBlogPost = async (blogPost, token) => {
  const { email } = await validateToken(token);
  const { id } = await User.findOne({ email });
  const { title, content, categoryIds, published, updated } = blogPost;
  await validateCategories(categoryIds);
  const newBlogPost = await BlogPost.create({ title, content, published, updated, userId: id });
  // Ajuda do Lucio
  await newBlogPost.addCategory(categoryIds);
  return newBlogPost;
};

module.exports = {
  createBlogPost,
};
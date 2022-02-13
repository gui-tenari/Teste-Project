const { User, Category, BlogPost } = require('../../models');
const validateToken = require('../token/validateToken');

const getBlogPosts = async (token) => {
  await validateToken(token);
  const blogPosts = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] }, 
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] }, 
    }],
  });
  return blogPosts;
};

module.exports = { getBlogPosts };
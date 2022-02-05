const { Category } = require('../../models');
const validateToken = require('../token/validateToken');

const getAllCategories = async (token) => {
  await validateToken(token);
  const categories = await Category.findAll();
  return categories;
};

module.exports = { 
  getAllCategories, 
};
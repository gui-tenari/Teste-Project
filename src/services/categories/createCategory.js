const { Category } = require('../../models');
const validateToken = require('../token/validateToken');

const createCategory = async (name, token) => {
  await validateToken(token);
  console.log(name);
  const newCategory = await Category.create({ name });
  return newCategory;
};

module.exports = {
  createCategory,
};
const { User } = require('../../models');
const validateToken = require('../token/validateToken');
const errorConstructor = require('../../helpers/errorConstructor');

const getAllUsers = async (token) => {
  await validateToken(token);

  const allUsers = await User.findAll();
  return allUsers;
};

const getUserById = async (id, token) => {
  await validateToken(token);
  const user = await User.findByPk(id);
  if (!user) throw errorConstructor('notFound', 'User does not exist');
  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
};

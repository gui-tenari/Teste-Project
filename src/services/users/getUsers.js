const { User } = require('../../models');
const validateToken = require('../token/validateToken');

const getAllUsers = async (token) => {
  await validateToken(token);

  const allUsers = await User.findAll();
  return allUsers;
};

module.exports = {
  getAllUsers,
};

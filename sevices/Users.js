const { User } = require('../models');

const createUser = async (userData) => {
  // const { email } = userData;
  // const repeatedEmail = await Users.findOne({ where: { email } });
  const newUser = await User.create(userData);
  return newUser;
};

module.exports = {
  createUser,
};
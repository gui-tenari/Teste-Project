const { User } = require('../models');

const createUser = async (userData) => {
  const { email } = userData;
  const repeatedEmail = await User.findOne({ where: { email } });
  if (repeatedEmail) throw new Error('User already registered');
  // const newUser = await User.create(userData);
  // return newUser;
};

module.exports = {
  createUser,
};
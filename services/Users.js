const { User } = require('../models');
const errorConstructor = require('../helpers/errorConstructor');
const createToken = require('./Token/createToken');

const createUser = async (userData) => {
  const { email, displayName } = userData;
  const repeatedEmail = await User.findOne({ where: { email } });

  if (repeatedEmail) throw errorConstructor('conflict', 'User already registered');

  await User.create(userData);
  const token = createToken({ email, displayName });
  return token;
};

module.exports = {
  createUser,
};
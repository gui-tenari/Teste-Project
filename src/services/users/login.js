const { User } = require('../../models');
const createToken = require('../token/createToken');
const errorConstructor = require('../../helpers/errorConstructor');

const login = async (payload) => {
  const { email, password } = payload;
  const validUser = await User.findOne({ where: { email, password } });

  if (!validUser) throw errorConstructor('badRequest', 'Invalid fields');

  const token = await createToken({ email, displayName: validUser.displayName });
  return token;
};

module.exports = { login };
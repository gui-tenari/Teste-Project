// const { Users } = require('../models');

const createUser = async (userData) => {
  const { email } = userData;
  console.log(email);
  // const repeatedEmail = await Users.findOne({ where: { email } });
  // const newUser = await Users.create(userData);
};

module.exports = {
  createUser,
};
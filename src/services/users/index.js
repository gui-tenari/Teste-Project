const { createUser } = require('./createUser');
const { login } = require('./login');
const { getAllUsers } = require('./getUsers');

module.exports = {
  createUser,
  login,
  getAllUsers,
};
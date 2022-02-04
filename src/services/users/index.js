const { createUser } = require('./createUser');
const { login } = require('./login');
const { getAllUsers, getUserById } = require('./getUsers');

module.exports = {
  createUser,
  login,
  getAllUsers,
  getUserById,
};
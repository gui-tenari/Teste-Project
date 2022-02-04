const userServices = require('../../services/users/index');
const statusCode = require('../../dictionary/statusCode');

const getAllUsers = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const users = await userServices.getAllUsers(authorization);
    return res.status(statusCode.success).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { id } = req.params;
    const user = await userServices.getUserById(id, authorization);
    return res.status(statusCode.success).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
};
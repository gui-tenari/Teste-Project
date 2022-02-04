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

module.exports = {
  getAllUsers,
};
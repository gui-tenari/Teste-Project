const userServices = require('../../services/users/index');
const statusCode = require('../../dictionary/statusCode');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await userServices.login({ email, password });
    return res.status(statusCode.success).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
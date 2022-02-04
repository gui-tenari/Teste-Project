const userServices = require('../../services/users/index');
const statusCode = require('../../dictionary/statusCode');

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUserInfo = {
      displayName,
      email,
      password,
      image,
    };
    const token = await userServices.createUser(newUserInfo);
    return res.status(statusCode.created).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};
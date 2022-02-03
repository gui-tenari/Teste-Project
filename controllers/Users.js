const userServices = require('../services/index');

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUserInfo = {
      displayName,
      email,
      password,
      image,
    };
    const newUser = await userServices.createUser(newUserInfo);
    return res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};
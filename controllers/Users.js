const userServices = require('../sevices/index');

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
    if (error.message) {
      error.code = 409;
      return next(error);
    }
    console.log(error.message);
    return res.status(500).json({ message: 'something went wrong' });
  }
};

module.exports = {
  createUser,
};
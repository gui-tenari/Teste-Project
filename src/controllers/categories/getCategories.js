const categoryServices = require('../../services/categories/getCategories');
const statusCode = require('../../dictionary/statusCode');

const getAllCategories = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const categories = await categoryServices.getAllCategories(authorization);
    return res.status(statusCode.success).json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategories,
};
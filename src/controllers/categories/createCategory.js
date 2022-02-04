const categoryServices = require('../../services/categories/index');
const statusCode = require('../../dictionary/statusCode');

const createCategory = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { name } = req.body;
    const newCategory = await categoryServices.createCategory(name, authorization);
    return res.status(statusCode.created).json(newCategory);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createCategory,
};
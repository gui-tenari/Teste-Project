const express = require('express');

const { createCategory } = require('../controllers/categories/index');
const { getAllCategories } = require('../controllers/categories/index');
const categoryValidation = require('../middlewares/categoryValidation');

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategories);
categoryRouter.post('/', categoryValidation, createCategory);

module.exports = categoryRouter;
const express = require('express');

const { createCategory } = require('../controllers/categories/index');
const categoryValidation = require('../middlewares/categoryValidation');

const categoryRouter = express.Router();

categoryRouter.post('/', categoryValidation, createCategory);

module.exports = categoryRouter;
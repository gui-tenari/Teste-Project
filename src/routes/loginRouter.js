const express = require('express');

const { login } = require('../controllers/users/index');
const loginValidation = require('../middlewares/loginValidation');

const loginRouter = express.Router();

loginRouter.post('/', loginValidation, login);

module.exports = loginRouter;

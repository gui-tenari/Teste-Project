const express = require('express');

const { createUser } = require('../controllers/users/index');
const userInfoValidation = require('../middlewares/userInfoValidation');

const userRouter = express.Router();

userRouter.post('/', userInfoValidation, createUser);

module.exports = userRouter;

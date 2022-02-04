const express = require('express');

const { createUser, getAllUsers } = require('../controllers/users/index');
const userInfoValidation = require('../middlewares/userInfoValidation');

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', userInfoValidation, createUser);

module.exports = userRouter;

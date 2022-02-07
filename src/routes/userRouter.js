const express = require('express');

const { createUser, getAllUsers, getUserById } = require('../controllers/users/index');
const userInfoValidation = require('../middlewares/userInfoValidation');

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', userInfoValidation, createUser);

module.exports = userRouter;

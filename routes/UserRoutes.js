const express = require('express');

const { createUser } = require('../controllers/index');

const userRouter = express.Router();

userRouter.post('/', createUser);

module.exports = userRouter;

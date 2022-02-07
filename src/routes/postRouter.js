const express = require('express');

const { createBlogPost } = require('../controllers/blogPosts/index');
const blogPostValidation = require('../middlewares/blogPostValidation');

const blogPostRouter = express.Router();

blogPostRouter.post('/', blogPostValidation, createBlogPost);

module.exports = blogPostRouter;
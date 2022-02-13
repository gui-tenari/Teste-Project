const express = require('express');

const { createBlogPost, getBlogPosts } = require('../controllers/blogPosts/index');
const blogPostValidation = require('../middlewares/blogPostValidation');

const blogPostRouter = express.Router();

blogPostRouter.get('/', getBlogPosts);
blogPostRouter.post('/', blogPostValidation, createBlogPost);

module.exports = blogPostRouter;
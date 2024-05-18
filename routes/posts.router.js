const express = require('express');
const { getPost, deletePost, writePost, getPatchPage } = require('../controllers/posts.controller');
const postsRouter = express.Router();


postsRouter.get('/write', writePost);
postsRouter.get('/patch/:id', getPatchPage);
postsRouter.get('/:id', getPost);
postsRouter.delete('/:id', deletePost);

module.exports = postsRouter;

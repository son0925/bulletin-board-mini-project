const express = require('express');
const { getPost, deletePost, writePost } = require('../controllers/posts.controller');
const postsRouter = express.Router();

// 라우트 순서 변경: /write 경로를 먼저 처리
postsRouter.get('/write', writePost);
postsRouter.get('/:id', getPost);
postsRouter.delete('/:id', deletePost);

module.exports = postsRouter;

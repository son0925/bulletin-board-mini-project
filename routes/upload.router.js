const express = require('express');
const { uploadPost } = require('../controllers/upload.controller');
const uploadRouter = express.Router();


uploadRouter.post('/', uploadPost);


module.exports = uploadRouter;
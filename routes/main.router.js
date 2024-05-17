const express = require('express');
const { getMainView } = require('../controllers/main.controller');
const mainRouter = express.Router();


mainRouter.get('/', getMainView);



module.exports = mainRouter;
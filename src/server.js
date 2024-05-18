const express = require('express');
const mainRouter = require('../routes/main.router');
const app = express();
const path = require('path');
const uploadRouter = require('../routes/upload.router');
const mongoose = require('mongoose');
const postsRouter = require('../routes/posts.router');
require('dotenv').config();

// Template Engine Set
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../', 'views'));

// MiddleWare Set
app.use(express.json());
app.use(express.urlencoded());
app.use('/static',express.static(path.join(__dirname, '../', 'public')));

// MongoDB Connect
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('MonGo DB Connected');
  })
  .catch((err) => {
    console.log(err);
  })


app.use('/', mainRouter);
app.use('/upload', uploadRouter);
app.use('/posts', postsRouter);



const port = process.env.SERVER_PORT || 4000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
})
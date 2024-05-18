const mongoose = require("mongoose");
const Post = require("../models/model");

async function getMainView(req,res) {
  const posts = await Post.find({});
  let isCheck = true;
  if (posts.length === 0) {
    isCheck = false;
  }
  res.render('index', {
    isCheck,
    posts
  });
}



module.exports = {
  getMainView
}
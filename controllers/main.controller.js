const mongoose = require("mongoose");
const Post = require("../models/model");

async function getMainView(req,res) {
  const posts = await Post.find({});
  console.log(posts);
  res.render('index', {posts});
}



module.exports = {
  getMainView
}
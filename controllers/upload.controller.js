const Post = require("../models/model");

async function uploadPost (req,res) {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  })
  await post.save();
  res.redirect('/');
}


module.exports = {
  uploadPost
}
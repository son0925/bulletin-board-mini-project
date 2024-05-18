const Post = require("../models/model");

async function getPost(req,res) {
  const post = await Post.findById(req.params.id);
  if (post) {
    res.render('post', {post})
  }
  else {
    res.status(404).send('게시글을 찾을 수 없습니다')
  }
}

async function deletePost(req,res) {
  try {
    console.log(req.params.id)
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).send({msg : '게시글이 삭제되었습니다'})
  }
  catch (err) {
    res.status(500).send({msg: '게시글 삭제 중 오류가 발생했습니다'})
  }
}

function writePost(req,res) {
  res.render('write')
}


module.exports = {
  getPost,
  deletePost,
  writePost
}
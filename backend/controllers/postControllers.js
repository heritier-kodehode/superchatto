const asynchandler = require('express-async-handler');
const Post = require('../models/postModel');
//@desc  Get Posts
//@route/method GET /api/posts
//@access private
const getPosts = asynchandler(async (req, res) => {
  const posts = await Post.find();

  res.status(200).json(posts);
});

//@desc  create Posts
//@route/method POST /api/posts
//@access private

const createPost = asynchandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add Text');
  }

  const post = await Post.create({
    text: req.body.text,
  });

  res.status(200).json(post);
});

//@desc  update Posts
//@route/method PUT /api/posts/:id
//@access private

const updatePosts = asynchandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedPost);
});

//@desc  delete Posts
//@route/method DELETE /api/posts/:id
//@access private
const deletePosts = asynchandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }
  console.log(post);

  await post.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getPosts,
  createPost,
  updatePosts,
  deletePosts,
};

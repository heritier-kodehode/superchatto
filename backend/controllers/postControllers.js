const asynchandler = require('express-async-handler');
const Post = require('../models/postModel');
const User = require('../models/userModel');
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
    user: req.user.id,
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

  const user = await User.findById(req.user.id);

  //Check for user
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  //Make sure the logged in user matches the post user
  if (post.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
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
  const user = await User.findById(req.user.id);

  //Check for user
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  //Make sure the logged in user matches the post user
  if (post.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await post.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getPosts,
  createPost,
  updatePosts,
  deletePosts,
};

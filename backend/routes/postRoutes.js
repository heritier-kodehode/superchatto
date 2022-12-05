const express = require('express');
const router = express.Router();
const {
  getPosts,
  createPost,
  updatePosts,
  deletePosts,
} = require('../controllers/postControllers');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getPosts).post(protect, createPost);

router.route('/:id').put(protect, updatePosts).delete(protect, deletePosts);

module.exports = router;

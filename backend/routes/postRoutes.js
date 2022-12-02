const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPost,
  updatePosts,
  deletePosts,
} = require("../controllers/postControllers");

router.route("/").get(getPosts).post(createPost);

router.route("/:id").put(updatePosts).delete(deletePosts);

module.exports = router;

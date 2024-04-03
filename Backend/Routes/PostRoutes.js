const express = require("express");
const Post = require("../models/Post");
const { postValidation } = require("../utils/PostValidation");
const PostRouter = express.Router();

const validatePost = (req, res, next) => {
  let { error } = postValidation.validate(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    next();
  }
};

PostRouter.get("/", async (req, res) => {
  let result;
  try {
    result = await Post.find();
    res.send(result);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});
PostRouter.post("/new",validatePost, async (req, res) => {
  try {
    let newPost = new Post(req.body);
    await newPost.save();
    res.send("Post created successfully");
  } catch (err) {
    res.status(500).send(err);
  }
});
PostRouter.delete("/delete", async (req, res) => {
  try {
    let postDelete = req.body.title;
    await Post.deleteOne({ title: postDelete });
    res.send("post deleted successfully");
  } catch (err) {
    res.status(500).send("Internal server Error");
  }
});

module.exports = PostRouter;

const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  description: {
    type: String
  },
  comments: {
    type: Number,
    default: 0
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
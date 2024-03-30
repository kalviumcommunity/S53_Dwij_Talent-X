const mongoose = require("mongoose");
const Post = mongoose.model("post", {
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  username:{
    type: String,
    required:true
  },
  likes: {
    type: Number,
  },
  description: {
    type: String,    
  },
  comments: {
    type: Number,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = Post;
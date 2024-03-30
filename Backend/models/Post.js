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
    default:0
  },
  description: {
    type: String,    
  },
  comments: {
    type: Number,
    default:0
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = Post;
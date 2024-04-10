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
  likes: {
    type: Number,
    default: 0
  },
  description: {
    type: String
  },
  comments: [{
    content:{
      type:String,
      required:true
    },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  }],
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
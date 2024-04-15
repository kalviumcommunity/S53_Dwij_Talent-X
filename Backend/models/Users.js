const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userId:{
        type:String,
    },
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
})

const User = mongoose.model("User", userSchema)
module.exports = User


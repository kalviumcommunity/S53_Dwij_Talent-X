const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 6996;
const Users = require("./models/Users");
const UserRouter = require("./Routes/Routes");
const PostRouter = require("./Routes/PostRoutes");
const post = require("./init/SamplePost");
const Post = require("./models/Post");

require("dotenv").config();
app.use(express.json());
app.use(cors());

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_LINK);
    console.log("Connected to the database");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
main();

const data = [
  new Users({
    name: "John Doe",
    email: "john@example.com",
  }),
  new Users({
    name: "james hardy",
    email: "james@example.com",
  }),
  new Users({
    name: "joe",
    email: "joe@example.com",
  }),
  new Users({
    name: "harvy",
    email: "harvy@example.com",
  }),
  new Users({
    name: "michal",
    email: "michal@example.com",
  }),
  new Users({
    name: "roms",
    email: "roms@example.com",
  }),
  new Users({
    name: "petra",
    email: "petra@example.com",
  }),
  new Users({
    name: "danzi",
    email: "danzi@example.com",
  }),
];

// Post.insertMany(post,(err,res)=>{
//   if(err){
//     console.log(err)
//   }else{
//     console.log(res)
//   }
// })

// Users.insertMany(data, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});
app.use("/users", UserRouter);
app.use("/post", PostRouter);

app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});

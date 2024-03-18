const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/Users");
const UserRouter = express.Router();
require("dotenv").config();

// async function main() {
//   try {
//     await mongoose.connect(process.env.MONGO_LINK);
//     console.log("Connected to the database");
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// }
// main();

UserRouter.get("/", async (req, res) => {
  let users;
  await User.find().then((data) => {
    users = data;
  });
  console.log(users);
  res.send(users);
});

UserRouter.post("/", async (req, res) => {
  res.send("Ready to add data inside the database");
});

UserRouter.put("/", async (req, res) => {
  res.send("Ready to update data inside the database");
});

UserRouter.delete("/", async (req, res) => {
  res.send("Ready to delete data from the database");
});

module.exports = UserRouter;

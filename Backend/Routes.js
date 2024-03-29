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
  let result;
  try {
    result = await User.find();
    res.send(result);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

UserRouter.post("/", async (req, res) => {
  try {
    let newUser = new User(req.body);
    await newUser.save();
    res.send("Data added successfully");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

UserRouter.put("/", async (req, res) => {
  res.send("Ready to update data inside the database");
});

UserRouter.delete("/", async (req, res) => {
  try {
    let deleteUser = req.body.name;
    await User.deleteOne({ name: deleteUser });
    res.send("Data deleted successfully");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = UserRouter;

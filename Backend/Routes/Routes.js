const express = require("express");
const User = require("../models/Users");
const UserRouter = express.Router();
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

module.exports = UserRouter ;

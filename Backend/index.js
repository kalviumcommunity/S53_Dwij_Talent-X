const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 6996;
const Users = require("./models/Users");
const UserRouter = require("./Routes");

require("dotenv").config();
app.use(express.json());
app.use(cors());

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_LINK);
    console.log("Connected to the database");
  } catch (err) {
    console.log(err);m  
    process.exit(1);
  }
}
main();

const data = [
  new Users({
    name: "John Doe",
    email: "john@example.com",
    password: "123456",
  }),
  new Users({
    name: "james hardy",
    email: "james@example.com",
    password: "1456",
  }),
  new Users({
    name: "joe",
    email: "joe@example.com",
    password: "3456",
  }),
  new Users({
    name: "harvy",
    email: "harvy@example.com",
    password: "3456",
  }),
  new Users({
    name: "michal",
    email: "michal@example.com",
    password: "3456",
  }),
  new Users({
    name: "roms",
    email: "roms@example.com",
    password: "3456",
  }),
  new Users({
    name: "petra",
    email: "petra@example.com",
    password: "3456",
  }),
  new Users({
    name: "danzi",
    email: "danzi@example.com",
    password: "3456",
  }),
];

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

app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});

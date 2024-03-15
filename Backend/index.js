const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 6996;

require("dotenv").config();
app.use(express.json());
app.use(cors());



async function main() {
  try{
    await mongoose.connect(process.env.MONGO_LINK);
    console.log("Connected to the database");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
main()

app.get("/", (req, res) => {
      res.send("Welcome to the server");
});

app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 6996;

require("dotenv").config();
app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect(process.env.MONGO_LINK);
}

app.get("/", (req, res) => {
  main()
    .then(() => {
      res.send("Welcome to the server");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});

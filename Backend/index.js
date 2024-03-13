const express = require("express");
const app = express();
const cors = require("cors");
const port = 6996;

require("dotenv").config();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});

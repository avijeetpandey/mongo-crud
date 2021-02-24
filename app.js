require("dotenv").config();
require("./database"); // importing DB connection

const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server up and running");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port :  ${PORT}`);
});

require("dotenv").config();
require("./database"); // importing DB connection

const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 4000;

const studentRoute = require("./routes/student");

app.use(cors());
app.use(bodyParser.json());
app.use("/", studentRoute);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port :  ${PORT}`);
});

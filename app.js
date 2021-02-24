require("dotenv").config();
require("./database"); // importing DB connection

const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 4000;

const studentRoute = require("./routes/student");

app.use(cors());
app.use(bodyParser.json());

app.use("/", studentRoute);

app.listen(PORT, () => {
  console.log(`Server is up and running on port :  ${PORT}`);
});

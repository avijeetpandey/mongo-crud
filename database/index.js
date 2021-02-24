require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Error connecting to the database");
    }
    console.log("Database up an running");
  }
);

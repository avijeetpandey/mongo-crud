const mongoose = require("mongoose");

let studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },
  rollNumber: {
    type: Number,
    required: true,
  },
  stream: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    maxlength: 10,
  },
});

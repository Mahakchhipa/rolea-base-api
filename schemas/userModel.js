const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: Number,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("usermodel", userSchema);

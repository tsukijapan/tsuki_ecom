const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/tsuki").then(() => {
  console.log("Mongodb is connected");
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model("user", userSchema);
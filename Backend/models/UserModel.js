const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
mongoose.connect("mongodb://localhost:27017/tsuki").then(() => {
  console.log("Mongodb is connected");
});

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: String, default: false },
    isAdmin: { type: Boolean, default: false },
    verficationCode: { type: String },
  },
  { timestamps: true }
);



module.exports = mongoose.model("user", userSchema);
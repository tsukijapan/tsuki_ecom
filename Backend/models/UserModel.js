const mongoose = require("mongoose");

require("dotenv").config();
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Mongoose is connected");
  })
  .catch((err) => {
    console.log("Mongoose Connection is Failed");
  });

const UserSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
});

const User = mongoose.model("user", UserSchema);
module.exports = User;

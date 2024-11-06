const express = require("express");
const Router = express.Router();

require("dotenv").config();

// userModel
const UserModel = require("../models/UserModel");
// JsonWebToken
const jwt = require("jsonwebtoken");
const sendVerification = require("../middleware/Email/Email.js");

// secret key

  // UserRegisteration
  Router.post("/register", async (req, res) => {
    try {
      const { username, email, password, isAdmin } = req.body;

      // Validate input
      if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
      }

      let user = await UserModel.findOne({ email });
      if (user) {
        return res
          .status(202)
          .json({ message: "User is already registered Please Login" });
      }

      let verficationCode = Math.floor(
        100000 + Math.random() * 900000
      ).toString();
      let newuser = await UserModel.create({
        username,
        email,
        password,
        isAdmin: isAdmin || false,
        verficationCode,
      });

      let token = jwt.sign({ email }, "shiva");
      res.cookie("token", token);

      sendVerification(email, verficationCode);

      return res.status(200).json({ message: "Signup Successfully", token });
    } catch (error) {
      console.error("Registration Error:", error); // Log the error
      res
        .status(500)
        .json({ error: "Server error in router post", details: error.message });
    }
  });

// Verify Email
Router.post("/verifyemail", async (req, res) => {
  try {
    const { code } = req.body;
   console.log(code);
   const user = await UserModel.findOne({
     verficationCode: code,
   });
   if (!user) {
     return res
       .status(400)
       .json({ success: false, message: "Invalid or Expired Code" });
   }
   user.isVerified = true;
   user.verficationCode = undefined;
   await user.save();
   return res.status(202).json({ success: true, message: "Email is Verified" });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Internal server Error" });
  }
});

// Login Email
Router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    } else {
      if (user.password != password) {
        return res.json({ message: "Incorrect Passord" });
      }
      let token = jwt.sign({ email: email, userid: user._id }, "shiva");
      res.cookie("token", token);

      return res.json({ message: "Login Successfully", token, email });
    }
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});

module.exports = Router;

const express = require("express");
const Router = express.Router();
const jwt = require("jsonwebtoken");
// model
const UserModel = require("../models/UserModel");

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
    let newuser = await UserModel.create({
      username,
      email,
      password,
      isAdmin: isAdmin || false,
    });

    let token = jwt.sign({ email }, "shiva");
    res.cookie("token", token);

    return res.status(200).json({ message: "Signup Successfully", token });
  } catch (error) {
    console.error("Registration Error:", error); // Log the error
    res
      .status(500)
      .json({ error: "Server error in router post", details: error.message });
  }
});

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

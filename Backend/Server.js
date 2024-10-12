const express = require("express");
const app = express();
require("dotenv").config();
let secretKey = process.env.SECRET_KEY;
// UserModel Import
const User = require("./models/UserModel");

// it is used to enable the parsing request
app.use(express.json());
// Import JsonWebtoken
const jwt = require("jsonwebtoken");
app.get("/", (req, res) => {});

// Signup route
app.post("/signup", async (req, res) => {
  try {
    let { Name, Email, Password } = req.body;
    let user = await User.findOne({ Email });

    if (!user) {
      let createUser = await User.create({
        Name,
        Email,
        Password,
      });
      let token = jwt.sign({ Email }, secretKey);

      if (token) {
        res
          .status(202)
          .json({ message: "User is Successfully Registered", token });
      }
    } else {
      console.log("Email is already registered");
      res.status(404).json({ message: "Email is already Registered" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Failed at the time of Signup" });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  let { Email, Password } = req.body;

  try {
    let user = await User.findOne({ Email, Password });
    console.log(user);
    if (!user) {
      return res.json({ message: "Email is not registered please register" });
    } else {
      let token = jwt.sign({ Email }, secretKey);
      return res.json({ message: "Login Successfully", token });
    }
  } catch (error) {
    return res.status(404).json({ message: "Failed to login" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
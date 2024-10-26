const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Middleware

// Routes
const UserRoute = require("./Routes/UserRoute");

// Routes
app.use("/api/users", UserRoute);

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});

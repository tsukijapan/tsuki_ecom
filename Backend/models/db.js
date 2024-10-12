const mongooose = require("mongoose");
require("dotenv").config();
mongooose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Mongoose is connected");
  })
  .catch((err) => {
    console.log("Mongoose Connection is Failed");
  });

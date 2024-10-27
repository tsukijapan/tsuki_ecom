const mongoose = require("mongoose");
const CartSchema = new mongoose.Mongoose.Schema({
  ProductId: String,
});

module.exports = mongoose.model("cart", CartSchema);

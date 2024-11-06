const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  ProductId: String,
});

module.exports = mongoose.model("cart", CartSchema);

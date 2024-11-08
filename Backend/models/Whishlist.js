const mongoose = require("mongoose");
const WishListSchema = new mongoose.Schema({
  ProductId: String,
});

module.exports = mongoose.model("Wishlist", WishListSchema);

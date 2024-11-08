const express = require("express");
const WishlistRouter = express.Router();
const WishListModel = require("../models/Whishlist.js");
// Posting Id
WishlistRouter.post("/wishlist/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const ProductInWishList = await WishListModel.findOne({ ProductId: id });
    if (ProductInWishList) {
      return res
        .status(202)
        .json({ message: "Product Is Already In WishList " });
    }
    await WishListModel.create({ ProductId: id });
    res
      .status(200)
      .json({ message: "Product Is Added in Wishlist Successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server and Error adding product to wishlist",
      error,
    });
  }
});

// Getting Id
WishlistRouter.get("/wishlist/products", async (req, res) => {
  try {
    const Product = await WishListModel.find();
    if (Product.length === 0) {
      return res.status(202).json({ message: "Wishlist Is Empty" });
    }

    res.json({ message: "Here is All Product", Product });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server and Error in wishlist",
      error,
    });
  }
});

module.exports = WishlistRouter;

const express = require("express");

const AddCartRouter = express.Router();

const CartModel = require("../models/AddToCart.js");

AddCartRouter.post("/addcart", async (req, res) => {
  const { id } = req.body;

  try {
    const ProductInCart = await CartModel.findOne({ ProductId: id });
    if (ProductInCart) {
      return res
        .status(202)
        .json({ message: "Product is already in the cart" });
    }

    // Add the product to the cart
    await CartModel.create({ ProductId: id });

    res.status(201).json({ message: "Product added to cart successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding product to cart", error });
  }
});

module.exports = AddCartRouter;
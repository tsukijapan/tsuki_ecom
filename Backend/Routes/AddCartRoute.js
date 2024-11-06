const express = require("express");

const AddCartRouter = express.Router();

const CartModel = require("../models/AddToCart.js");

// Add To Cart
AddCartRouter.post("/addcart/:id", async (req, res) => {
  const { id } = req.params;

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

// :id  
// this means we are it is a url and we are taking from url 

// Delete The Cart
AddCartRouter.post("/deletecart/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const ProductInCart = await CartModel.findOne({ ProductId: id });
    if (!ProductInCart) {
      return res.status(404).json({ error: "Product is not in the cart" });
    }

    // Delete the product from the cart
    await CartModel.deleteOne({ ProductId: id });

    res.status(200).json({ message: "Product removed from cart successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error removing product from cart" });
  }
});

module.exports = AddCartRouter;
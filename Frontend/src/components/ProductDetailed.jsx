import { useState } from "react";
import React from "react";
import { json, useParams } from "react-router-dom";

// Reuse the same products array (this can later be moved to a context or state management solution)
const products = [
  {
    id: 1,
    image: "/ProductImage/product1.webp",
    description:
      "Pro 4K GPS Drone - 3 Big Batteries, Brushless Motor, Smart Obstacle Avoidance, GPS Home Return, Perfect for Adult Beginners, Ideal Gift for Friends and Family",
    name: "Pro 4K GPS Drone -",
    price: "$70",
    rating: 4.5,
    reviews: 738,
    label: "HOT",
  },
  {
    id: 2,
    image: "/ProductImage/product2.png",
    description:
      "256GB Dual SIM U24 Ultra Android Phone - 6.8'' Full HD Display, Built-In Pen, Unlocked for Worldwide Use - High-Performance Mobile with Advanced Camera and Long-Lasting Battery",
    name: "Samsung Electronics Samsung Galaxy S21 5G",
    price: "$2300",
    rating: 4.6,
    reviews: 536,
    label: "BEST DEALS",
  },
  {
    id: 3,
    image: "/ProductImage/product3.webp",
    name: "SENBONO Smart Glasses",
    description:
      "SENBONO Smart Glasses - Advanced Blue Light Filter & Polarized Vision - Seamless Audio, Built-in Mic & Speakers - AI Voice Assistant, Touch Control - 5hr Battery Life - Perfect Rectangle/Large Style Gift for Birthday, Easter, Presidents Day, Boyfriends & Girlfriends",
    price: "$27.48",
    rating: 5,
    reviews: 423,
    label: "BEST DEALS",
  },
  {
    id: 4,
    image: "/ProductImage/product4.webp",
    description:
      "TWS Digital Display Wireless Headset With Matching Silicone Case, TWS Headset, Gaming Headset, Low Latency High Quality Headset, Airpod Max, Cheap Headset, Clearance Items, Affordable Set, Headset Protective Case",
    name: "TWS Digital Display Wireless Headset",
    price: "$5.59",
    rating: 1.0,
    reviews: 356,
    label: "old",
  },
];

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  const [productId, setProductId] = useState(() => {
    const savedProductIds = localStorage.getItem("productIds");
    return savedProductIds ? JSON.parse(savedProductIds) : [];
  });
  const handleQuantityChange = (amount) => {
    setQuantity(quantity + amount > 0 ? quantity + amount : 1);
  };
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((p) => p.id === parseInt(id)); // Find the product by ID

  const cart = () => {
    if (product && !productId.includes(product.id)) {
      const updatedProductIds = [...productId, product.id];

      // Step 2: Update the state with the new product ID
      setProductId(updatedProductIds);

      // Step 3: Store the updated product IDs in localStorage
      localStorage.setItem("productIds", JSON.stringify(updatedProductIds));

      // For debugging
      alert("Product added to cart:", product.id);
      console.log("Updated product IDs in localStorage:", updatedProductIds);
    } else {
      alert("Product already in cart or not found.");
    }
  };
  const wishlist = () => {
    if (product && !productId.includes(product.id)) {
      const updatedProductIds = [...productId, product.id];

      // Step 2: Update the state with the new product ID
      setProductId(updatedProductIds);

      // Step 3: Store the updated product IDs in localStorage
      localStorage.setItem("productIds", JSON.stringify(updatedProductIds));

      // For debugging
      console.log("Product added to cart:", product.id);
      console.log("Updated product IDs in localStorage:", updatedProductIds);
    } else {
      console.log("Product already in cart or not found.");
    }
  };
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="p-8">
      <div className="flex">
        {/* Left side: Image */}
        <div className="w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right side: Product details */}
        <div className="w-1/2 ml-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4">{product.price}</p>

          <div className="text-orange-400 mb-4">
            {"★".repeat(Math.floor(product.rating))}
            {"☆".repeat(5 - Math.floor(product.rating))}
            <span className="text-gray-600 text-sm ml-1">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-4">
            <div className="quantity-selector rounded-md flex items-center space-x-2 bg-slate-200 my-6 w-[16vh] justify-center text-black ">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="bg-black-300 text-black text-center"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 bg-transparent text-black text-center"
              />
              <button
                onClick={() => handleQuantityChange(1)}
                className="bg-black-400 text-black text-center"
              >
                +
              </button>
            </div>
            <button
              className="bg-orange-500 text-white py-2 px-4 rounded mr-4 hover:bg-orange-700"
              onClick={cart}
            >
              Add to Cart
            </button>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded mr-4 hover:bg-blue-500"
              onClick={() => alert(" Feature is Disabled")}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

import React from "react";
import { Link } from "react-router-dom";

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
    name: "Samsung Electronics Samsung Galaxy",
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
    rating: 4.0,
    reviews: 356,
    label: "old",
  },
];

const AllProductPage = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search for anything..."
          className="p-2 border rounded w-1/3"
        />
        <select className="p-2 border rounded">
          <option>Most Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
      {/* Product  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="border border-gray-200 rounded-lg p-4 transition-transform transform hover:scale-105 shadow-md hover:shadow-lg">
              {product.label && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full absolute top-2 right-2">
                  {product.label}
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="flex items-center text-orange-400 mb-2">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
                <span className="text-gray-600 text-sm ml-1">
                  ({product.reviews})
                </span>
              </div>
              <p className="text-lg font-semibold text-gray-800">
                {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProductPage;

import React from "react";
import { MdDelete } from "react-icons/md";

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
function Cart() {
  let cartId = localStorage.getItem("productIds");
  if (cartId) {
    console.log(cartId);
  }
  let cartProducts = products.filter((product) => cartId.includes(product.id));
  function DeleteCart() {
    alert("Feature is Disabled");
  }

  return (
    <div className="CartSection flex flex-col items-center p-6">
      {/* Cart Header */}
      <div className="CartSectionHeader w-full bg-blue-500 text-white text-2xl font-semibold text-center p-4 rounded-lg shadow-md">
        Cart List
      </div>

      {/* Cart List Section */}

      {cartProducts && cartProducts.length > 0 ? (
        <>
          {cartProducts.map((product) => (
            <div
              key={product.id}
              className="CartList w-full flex flex-col mt-6"
            >
              {/* Cart Item */}
              <div className="cart-box flex items-center p-4 bg-white rounded-lg shadow-lg mb-4 hover:shadow-xl transition duration-300 ease-in-out">
                {/* Product Image */}
                <div className="image h-24 w-24 flex-shrink-0 mr-4">
                  <img
                    className="h-full w-full object-cover rounded-lg"
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                {/* Product Description */}
                <div className="description flex-grow">
                  <h4 className="text-lg font-semibold mb-2">{product.name}</h4>

                  <div className="price text-xl font-bold text-gray-900 ml-4 flex gap-4 items-center">
                    <span className="line-through text-gray-500">$30.00</span>
                    {product.price}
                  </div>
                  <p className="text-sm text-gray-400">
                    Delivery expected in upcoming <span>4 Days | Free</span>
                  </p>
                </div>

                {/* Remove Item */}
                <div
                  className="RemoveItem cursor-pointer text-2xl"
                  onClick={() => DeleteCart()}
                >
                  <MdDelete />
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>Cart Data is Not found</div>
      )}
      {/* Checkout Section */}
      <div className="CheckoutSection w-full bg-gray-100 p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Order Summary
        </h2>
        {/* Price Item */}
        <div className="Subtotal flex justify-between mb-4">
          <span className="text-gray-600">Price:</span>
          <span className="font-semibold text-gray-900">$25.00</span>
        </div>

        {/* Subtotal */}
        <div className="Subtotal flex justify-between mb-4">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-semibold text-gray-900">$50.00</span>
        </div>

        {/* Total */}
        <div className="Total flex justify-between mb-4 text-lg">
          <span className="text-gray-800">Total (Including Tax):</span>
          <span className="font-bold text-gray-900">$50.00</span>
        </div>

        {/* Checkout Button */}
        <div className="CheckoutButton mt-4">
          <button className="w-full bg-green-500 text-white p-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300">
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

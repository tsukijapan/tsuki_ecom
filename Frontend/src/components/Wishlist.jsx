import React from "react";

const Wishlist = () => {
  const wishlistItems = [
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

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-5 text-center">
        <h1 className="text-2xl font-bold">My Wishlist</h1>
      </header>

      <main className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-md shadow-lg">
        <section className="wishlist-container">
          <center>
            <h2 className="text-xl font-semibold mb-4">Wishlisted Items</h2>
          </center>
          <ul className="space-y-4">
            {wishlistItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between p-4 border-b border-gray-300"
              >
                <img
                  src={item.image}
                  alt="Product"
                  className="w-24 h-auto rounded-md"
                />
                <div className="item-details flex-1 ml-4">
                  <h3 className="text-lg font-medium">{item.name}</h3>

                  <p className="text-orange-500 font-bold">{item.price}</p>
                </div>

                <button
                  className="ml-4 bg-red-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-red-700"
                  onClick={() => alert("Feautre is disabled")}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Wishlist;

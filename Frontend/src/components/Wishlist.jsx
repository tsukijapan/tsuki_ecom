import React from "react";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Product Name 1",
      description: "Short description of product 1.",
      price: "$29.99",
      imageUrl: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Product Name 2",
      description: "Short description of product 2.",
      price: "$49.99",
      imageUrl: "https://via.placeholder.com/100",
    },
  ];

  //   const handleRemove = (id) => {
  //     console.log(Remove item with id: ${id});
  //   };

  //   const handleEdit = (id) => {
  //     console.log(Edit item with id: ${id});
  //   };

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
                  src={item.imageUrl}
                  alt="Product"
                  className="w-24 h-auto rounded-md"
                />
                <div className="item-details flex-1 ml-4">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-orange-500 font-bold">{item.price}</p>
                </div>

                <button
                  className="ml-4 bg-red-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-red-700"
                  onClick={() => handleRemove(item.id)}
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

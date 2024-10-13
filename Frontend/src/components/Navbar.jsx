import React, { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import Category from "./Category";
import ProfileSlider from "./ProfileSlider";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  let NumberOfCartItems = localStorage.getItem("productIds");
  let length;
  if (NumberOfCartItems) {
    // NumberOfCartItems;
    let productarray = JSON.parse(NumberOfCartItems);
    length = productarray.length;
  } else {
    length = 0;
  }

  return (
    <>
      <nav className="bg-customblue p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="rounded-full h-12 w-12 overflow-hidden">
              <img
                src="/Images/logo.png"
                alt="logoImage"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="ml-2 text-white text-2xl font-semibold">
              TSUKI
            </span>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6 text-white">
            {/* Cart Icon with Badge */}
            <div className="relative cursor-pointer">
              <NavLink to="/cart">
                {" "}
                <CgShoppingCart className="text-2xl bg-transparent" />
              </NavLink>
              {/* Badge for dynamic changes */}
              <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {length}
              </span>
            </div>

            {/* Heart Icon */}
            <NavLink to="/wishlist">
              <FaRegHeart className="text-2xl cursor-pointer" />
            </NavLink>

            {/* User Icon */}
            <LuUser2 className="text-2xl cursor-pointer" onClick={toggleMenu} />
          </div>
        </div>
        {/* Conditionally render ProfileSlider */}
        {menuOpen && (
          <ProfileSlider
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
            className="transition-transform duration-2000 ease-in-out"
          />
        )}
      </nav>
      <div>
        <Category />
      </div>
    </>
  );
};

export default Navbar;

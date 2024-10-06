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

  return (
    <>
      <nav className="bg-customblue p-4">
        <div className="container mx-auto flex items-center justify-around">
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

          {/* Search Bar */}
          <div className="w-full max-w-lg mx-4">
            <input
              type="text"
              placeholder="Search for anything..."
              className="w-full py-2 px-4 rounded-lg shadow-sm focus:outline-none"
            />
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
                2
              </span>
            </div>

            {/* Heart Icon */}

            <FaRegHeart className="text-2xl cursor-pointer" />

            {/* User Icon */}
            <LuUser2 className="text-2xl cursor-pointer" onClick={toggleMenu} />
          </div>
        </div>
        {/* Conditionally render ProfileSlider */}
        {menuOpen && (
          <ProfileSlider menuOpen={menuOpen} toggleMenu={toggleMenu} />
        )}
      </nav>
      <div>
        <Category />
      </div>
    </>
  );
};

export default Navbar;

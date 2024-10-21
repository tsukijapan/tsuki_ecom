import React, { useState } from "react";

import { MdOutlineHome } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineCustomerService } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { HiOutlineHome } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { FaTv } from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";
import { RiMenu5Line } from "react-icons/ri";
import CategorySlider from "./CategorySlider";

function Category() {
  const [isOpen, setIsOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleCategory = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop View */}
      <nav className="w-full text-black bg-customwhite h-20 border-gray-500 border-[1px] p-6 hidden md:block">
        <div className="navItems flex items-center justify-around">
          <div className="listItems flex items-center gap-8">
            <div className="relative">
              {/* All Categories */}
              <div className="w-64">
                <div className="flex items-center justify-between p-3 bg-customgray text-black">
                  <span className="text-lg">All Categories</span>
                  <button onClick={toggleCategory}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${isOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.23a.75.75 0 011.06 0L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Dropdown menu for desktop */}
              {isOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg z-50 border-t border-gray-300">
                  <div className="p-4 bg-white">
                    <ul>
                      <li className="flex items-center py-2">
                        <HiOutlineHome className="mr-2" />
                        <a href="#">New Arrivals</a>
                      </li>
                      <li className="flex items-center py-2">
                        <FaTv className="mr-2" />
                        <a href="#">Electronics</a>
                      </li>
                      <li className="flex items-center py-2">
                        <GiLipstick className="mr-2" />
                        <a href="#">Cosmetics</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Links */}
            <div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 justify-center font-bold text-blue-500"
                    : "flex items-center gap-1 justify-center"
                }
              >
                <MdOutlineHome className="drop-shadow-md" />
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/allproduct"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 justify-center font-bold text-blue-500"
                    : "flex items-center gap-1 justify-center"
                }
              >
                <MdProductionQuantityLimits className="drop-shadow-md" />
                All Product
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/ContactUs"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 justify-center font-bold text-blue-500"
                    : "flex items-center gap-1 justify-center"
                }
              >
                <AiOutlineCustomerService className="drop-shadow-md" />
                Customer Support
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/HelpPage"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 justify-center font-bold text-blue-500"
                    : "flex items-center gap-1 justify-center"
                }
              >
                <RiErrorWarningLine className="drop-shadow-md" />
                Need Help
              </NavLink>
            </div>
          </div>
          <div className="number flex items-center">
            <LuPhoneCall className="drop-shadow-md" />
            <p>+01-202-143-690</p>
          </div>
        </div>
      </nav>

      {/* mobile view */}

      <div className="w-full text-black bg-customwhite h-20 border-gray-500 border-[1px] flex justify-between items-center px-6 md:hidden">
        {/* Left Section: All Categories */}
        <div className="w-48">
          <div className="flex items-center justify-between p-3 bg-customgray text-black">
            <span className="text-lg">All Categories</span>
            <button onClick={toggleCategory}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${isOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.23a.75.75 0 011.06 0L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section: Menu Icon */}
        <div className="flex cursor-pointer">
          <RiMenu5Line className="text-2xl" onClick={toggleMenu} />
        </div>

        {menuOpen && (
          <CategorySlider
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
            className="transition-transform duration-2000 ease-in-out"
          />
        )}
      </div>
    </>
  );
}

export default Category;

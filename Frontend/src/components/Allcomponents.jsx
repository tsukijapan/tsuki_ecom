import React, { useState } from "react";
import {
  FaGift,
  FaLaptop,
  FaMobileAlt,
  FaTv,
  FaCamera,
  FaUtensils,
  FaTshirt,
  FaBasketballBall,
} from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";

const Componentbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Sidebar Toggle Button (Remains the same) */}
      <div className="w-64">
        <div className="flex items-center justify-between p-4 bg-customgray text-black">
          <span className="text-lg">All Categories</span>
          <button onClick={toggleMenu}>
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

      {/* Sidebar below the navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 w-64 bg-white shadow-lg z-50 border-t border-gray-300">
          <div className="p-4 bg-white">
            <ul>
              <li className="flex items-center py-2 text-black border-b-[1px] w-fit border-black pb-2 transition-all duration-300 ease-in-out">
                <HiOutlineHome className="mr-2" />
                <a href="#">New Arrivals</a>
              </li>
              <li className="flex items-center py-2 text-black border-b-[1px] w-fit border-black pb-2 transition-all duration-300 ease-in-out">
                <FaTv className="mr-2 " />
                <a href="#" className="">
                  Electronics
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Componentbar;

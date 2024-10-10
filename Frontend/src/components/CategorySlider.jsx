import React from "react";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineCustomerService } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";

function CategorySlider({ menuOpen, toggleMenu }) {
  return (
    <div
      className={`fixed top-0 right-0 w-[50vh] h-full border border-gray-950 p-4 bg-customgray shadow-lg z-50 transition-transform duration-2000 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      {/* Cross symbol */}
      <div className="flex justify-end cursor-pointer">
        <RxCross1
          className="text-2xl hover:origin-center hover:rotate-90 transition-transform duration-300 ease-linear text-gray-700"
          onClick={toggleMenu}
        />
      </div>

      {/* List items */}
      <div className="flex flex-col items-center pt-12 space-y-10">
        <NavLink className="flex items-center gap-1 justify-center">
          <MdOutlineHome className="drop-shadow-md" />
          Home
        </NavLink>
        <NavLink
          to="/allproduct"
          className="flex items-center gap-1 justify-center"
        >
          <MdProductionQuantityLimits className="drop-shadow-md" />
          All Products
        </NavLink>
        <NavLink
          to="/customer"
          className="flex items-center gap-1 justify-center"
        >
          <AiOutlineCustomerService className="drop-shadow-md" />
          Customer Support
        </NavLink>
        <NavLink to="/" className="flex items-center gap-1 justify-center">
          <RiErrorWarningLine className="drop-shadow-md" />
          Need Help
        </NavLink>
        <NavLink
          to="/"
          className="text-2xl font-semibold text-gray-800 hover:text-black hover:border-b-2 border-black pb-2 transition-all duration-300 ease-in-out"
        ></NavLink>
      </div>
    </div>
  );
}

export default CategorySlider;

import React from "react";
import NavCartComponent from "./NavCartComponent";

export const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center gap-2">
        <div className="lg:text-3xl text-lg  font-bold tracking-wide">
          Shoes Collection{" "}
        </div>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-4">
            <a href="/" className="hover:text-gray-300 transition duration-300">
              Home
            </a>
            <a
              href="/products"
              className="hover:text-gray-300 transition duration-300"
            >
              Products
            </a>
            <a
              href="/about"
              className="hover:text-gray-300 transition duration-300"
            >
              About
            </a>
          </nav>
          <NavCartComponent />
        </div>
        <button className="md:hidden flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

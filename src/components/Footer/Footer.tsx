import React from "react";

export const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="/" className="hover:text-gray-300 transition duration-300">
            Home
          </a>
          <a href="/products" className="hover:text-gray-300 transition duration-300">
            Products
          </a>
          <a href="/about" className="hover:text-gray-300 transition duration-300">
            About
          </a>
          <a href="/contact" className="hover:text-gray-300 transition duration-300">
            Contact
          </a>
        </div>
        <div className="text-sm">
          © 2024 My Store. All rights reserved by Mehedi.
        </div>
      </div>
    </div>
  );
};

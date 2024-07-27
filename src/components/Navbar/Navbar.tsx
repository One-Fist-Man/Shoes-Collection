import React from "react";
import CartIcon from "../SvgComponents/CartIcon";
import NavCartComponent from "./NavCartComponent";

export const Navbar = () => {
  return (
    <>
      <div className="bg-gray-800 text-white p-1">
        <div className="container mx-auto flex justify-between items-center">
          <div className=" ">My Product App</div>
          <NavCartComponent/>
        </div>
      </div>
    </>
  );
};

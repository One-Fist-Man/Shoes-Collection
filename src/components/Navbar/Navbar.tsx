import React from "react";
import CartIcon from "../SvgComponents/CartIcon";

export const Navbar = () => {
  return (
    <>
      <div className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <div>My Product App</div>
          <div><p className="mb-[-8px] ml-[10px] text-red-600">0</p><CartIcon/></div>
        </div>
      </div>
    </>
  );
};

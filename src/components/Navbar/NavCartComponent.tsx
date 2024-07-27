'use client'
import React from "react";
import CartIcon from "../SvgComponents/CartIcon";
import { useProductsStore } from "@/store/useStore";

const NavCartComponent = () => {
  const { AllCartProducts } = useProductsStore();
  return (
    <div className="border rounded-xl py-1 pr-1 flex flex-col justify-center items-center">
      <p className=" text-red-500  rounded-2xl leading-[14px]   font-bold">{AllCartProducts.length}</p>
      <div className="ml-2">
        <CartIcon />
      </div>
    </div>
  );
};

export default NavCartComponent;

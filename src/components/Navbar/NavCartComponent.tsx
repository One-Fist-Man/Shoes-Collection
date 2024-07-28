'use client'
import React, { useEffect, useState } from "react";
import CartIcon from "../SvgComponents/CartIcon";
import { useProductsStore } from "@/store/useStore";

const NavCartComponent = () => {
  const { AllCartProducts } = useProductsStore();
  const [cartCount, setCartCount] = useState(0);
 

  useEffect(() => {
    setCartCount(AllCartProducts.length);
  }, [AllCartProducts]);
  return (
    <div className="border rounded-xl py-1 pr-1 flex flex-col justify-center items-center">
      <p className="  rounded-2xl leading-[14px]   font-bold">{cartCount}</p>
      <div className="ml-2">
        <CartIcon />
      </div>
    </div>
  );
};

export default NavCartComponent;

"use client";
import React, { useEffect } from "react";
import CartCard from "./CartCard";
import { useProductsStore } from "@/store/useStore";
import { Product } from "@/types/product";

const CartList = () => {
  const { AllCartProducts } = useProductsStore();
  return (
    <>
      <div>
        {AllCartProducts.map((cartData: Product) => {
          return (
            <>
              <CartCard cartData={cartData} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default CartList;
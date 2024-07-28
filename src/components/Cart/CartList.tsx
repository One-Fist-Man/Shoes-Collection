"use client";
import React, { useEffect } from "react";
import CartCard from "./CartCard";
import { useProductsStore } from "@/store/useStore";
import { CartType, Product } from "@/types/product";

const CartList = () => {
  const { AllCartProducts } = useProductsStore();
  return (
    <>
      {AllCartProducts.length === 0 ? (
        <p className="text-center text-gray-500 ">Cart is empty</p>
      ) : (
        <div className="flex flex-col gap-4">
          {AllCartProducts.map((cartData: CartType) => {
            return (
              <div key={cartData.Id}>
                <CartCard cartData={cartData} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CartList;

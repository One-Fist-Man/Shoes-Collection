"use client";
import Image from "next/image";
import React from "react";
import { CartType, Product } from "@/types/product";
import { useProductsStore } from "@/store/useStore";

const CartCard = ({ cartData }: { cartData: CartType }) => {
  const { AllCartProducts, AllProducts, setAllCartProducts, setAllProducts } =
    useProductsStore();

  const updateLocalStorage = (cart: CartType[], products: Product[]) => {
    localStorage.setItem("AllCartProducts", JSON.stringify(cart));
    localStorage.setItem("AllProducts", JSON.stringify(products));
  };

  const removeFromCart = (clickedCart: CartType) => {
    const updatedCart = AllCartProducts.filter(
      (item) => item.Id !== clickedCart.Id
    );
    setAllCartProducts(updatedCart);

    const updatedProducts = AllProducts.map((item) =>
      item.Id === clickedCart.Id
        ? {
            ...item,
            availableQuantity: item.availableQuantity + clickedCart.Cartadded,
          }
        : item
    );
    setAllProducts(updatedProducts);
    updateLocalStorage(updatedCart, updatedProducts);
  };

  const incrementQuantity = (clickedCart: CartType) => {
    const updatedCart = AllCartProducts.map((item) =>
      item.Id === clickedCart.Id && item.availableQuantity > 0
        ? {
            ...item,
            Cartadded: item.Cartadded + 1,
            availableQuantity: item.availableQuantity - 1,
          }
        : item
    );

    setAllCartProducts(updatedCart);

    const updatedProducts = AllProducts.map((item) =>
      item.Id === clickedCart.Id && item.availableQuantity > 0
        ? { ...item, availableQuantity: item.availableQuantity - 1 }
        : item
    );
    setAllProducts(updatedProducts);
    updateLocalStorage(updatedCart, updatedProducts);
  };

  const decrementQuantity = (clickedCart: CartType) => {
    const updatedCart = AllCartProducts.map((item) =>
      item.Id === clickedCart.Id && clickedCart.Cartadded > 0
        ? {
            ...item,
            Cartadded: item.Cartadded - 1,
            availableQuantity: item.availableQuantity + 1,
          }
        : item
    );
    setAllCartProducts(updatedCart);

    const updatedProducts = AllProducts.map((item) =>
      item.Id === clickedCart.Id && clickedCart.Cartadded > 0
        ? { ...item, availableQuantity: item.availableQuantity + 1 }
        : item
    );
    setAllProducts(updatedProducts);
    updateLocalStorage(updatedCart, updatedProducts);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src={cartData.FeaturedImageUrl}
          alt={cartData.Name}
          height={50}
          width={50}
          className="object-cover rounded"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold sm:text-base">{cartData.Name}</h2>
          <div className="flex items-center mt-1 space-x-2">
            <span className="text-gray-500 line-through sm:text-sm">
            ৳{" "} {cartData.ProductPrice.OldPrice}
            </span>
            <span className="text-lg font-bold text-gray-800 sm:text-base">
            ৳{" "} {cartData.ProductPrice.Price}
            </span>
          </div>
          <div className="mt-2 flex items-center">
            <div className="text-gray-600 sm:text-sm">Qty:</div>
            <div className="flex items-center ml-2 border border-gray-300 rounded">
              <button
                className="px-2 py-1 text-gray-700 hover:bg-gray-200 sm:px-1 sm:py-0.5"
                onClick={() => decrementQuantity(cartData)}
              >
                -
              </button>
              <span className="px-4 py-1 sm:px-2 sm:py-0.5">{cartData.Cartadded}</span>
              <button
                className="px-2 py-1 text-gray-700 hover:bg-gray-200 sm:px-1 sm:py-0.5"
                onClick={() => incrementQuantity(cartData)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(cartData)}
        className="text-gray-500 hover:text-red-600 p-1 sm:p-0.5"
      >
        <svg
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 sm:w-3 sm:h-3"
        >
          <path
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartCard;

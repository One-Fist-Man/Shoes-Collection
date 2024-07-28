"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "@/types/product";
import { useProductsStore } from "@/store/useStore";

const ProductCard = ({ data }: { data: Product }) => {
  const { AllCartProducts, AllProducts, setAllCartProducts, setAllProducts } =
    useProductsStore();

  const addToCartFunc = (product: Product) => {
    const existingProductIndex = AllCartProducts.findIndex(
      (item) => item.Id === product.Id
    );

    let updatedCart;
    if (existingProductIndex > -1) {
      updatedCart = AllCartProducts.map((item, index) =>
        index === existingProductIndex
          ? {
              ...item,
              Cartadded:
                product.availableQuantity > 0
                  ? item.Cartadded + 1
                  : item.Cartadded,
              availableQuantity:
                product.availableQuantity > 0
                  ? item.availableQuantity - 1
                  : product.availableQuantity,
            }
          : item
      );
    } else {
      updatedCart = [
        ...AllCartProducts,
        {
          ...product,
          Cartadded: 1,
          availableQuantity: product.availableQuantity - 1,
        },
      ];
    }

    let updatedProductsList = AllProducts.map((item, index) =>
      item.Id === product.Id
        ? { ...item, availableQuantity: (item.availableQuantity || 1) - 1 }
        : item
    );

    setAllCartProducts(updatedCart);
    setAllProducts(updatedProductsList);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 ">
      <Link href={`/products/${data.Id}`}>
        <div className="flex justify-center items-center p-4">
          <Image
            src={data.FeaturedImageUrl}
            alt={data.Name}
            height={200}
            width={200}
            className="object-cover"
          />
        </div>
        <div className="px-4 bg-gray-100">
          <h1 className="text-lg font-bold text-center">{data.Name}</h1>
          <div className="flex justify-center items-center mt-2">
            <span className="text-gray-400 line-through">
              ৳ {data.ProductPrice.OldPrice}
            </span>
            <span className="ml-2 text-xl font-bold text-gray-800">
              ৳ {data.ProductPrice.Price}
            </span>
          </div>
          <p className="mt-2 text-gray-600 text-center">
            Available quantity:{" "}
            <span className="font-semibold">
              {data.availableQuantity ? data.availableQuantity : 0}
            </span>
          </p>
        </div>
      </Link>
      <button
        className={` w-full bg-blue-500 text-white p-2 rounded ${
          data.availableQuantity
            ? "hover:bg-blue-600"
            : "opacity-50 cursor-not-allowed"
        }`}
        onClick={() => (data.availableQuantity ? addToCartFunc(data) : null)}
        disabled={!data.availableQuantity}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

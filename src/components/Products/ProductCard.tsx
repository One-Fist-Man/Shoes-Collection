"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import router from "next/router";
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
    <div>
      <Link
        href={`/products/${data.Id}`}
        // onClick={() => router.push(`/products/${data.Id}`)}
        className="flex justify-center items-center"
      >
        <Image
          src={data.FeaturedImageUrl}
          alt=""
          height={100}
          width={100}
        ></Image>
      </Link>
      <div className="bg-gray-100 p-4">
        <h1>{data.Name}</h1>
        <div className="flex">
          <span className="text-gray-400 line-through">
            {data.ProductPrice.OldPrice}
          </span>
          <span className="ml-2 whitespace-nowrap font-bold">
            {data.ProductPrice.Price}
          </span>
        </div>
        <p> availavble quantity {data.availableQuantity}</p>
        <button
          className="border p-1 text-sm"
          onClick={() => (data.availableQuantity ? addToCartFunc(data) : "")}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

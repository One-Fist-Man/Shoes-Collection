import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2">
            <Image
              src={product?.FeaturedImageUrl}
              alt={product?.Name}
              height={400}
              width={400}
              className="object-cover w-full"
            />
          </div>
          <div className="p-4 md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              {product?.Name}
            </h1>
            <p className="text-gray-700 mb-4">{product?.ShortDescription}</p>

            <p className="text-xl md:text-2xl font-semibold mb-4">
              Price:{" "}
              <span className="text-gray-400 line-through mr-3">
                ৳ {product.ProductPrice.OldPrice}
              </span>
              <span>৳ {product?.ProductPrice?.Price}</span>
            </p>
            <p className="text-gray-600 mb-4">
              Available Quantity: {product?.availableQuantity}
            </p>
            {/* <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

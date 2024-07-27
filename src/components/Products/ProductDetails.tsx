import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <div>
      <div className="product-page">
        <Image
          src={product?.FeaturedImageUrl}
          alt={product?.Name}
          height={100}
          width={100}
        />
        <h1>{product?.Name}</h1>
        <p>{product?.ShortDescription}</p>
        <p>Price: ${product?.ProductPrice?.Price}</p>
        <p>Available Quantity: {product?.availableQuantity}</p>
      </div>
    </div>
  );
};

export default ProductDetails;

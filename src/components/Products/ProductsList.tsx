import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-6 gap-4 ">
      {products?.length > 0 &&
        products?.map((items) => {
          return (
            <div
              key={items.Id}
              className="md:col-span-3 xl:col-span-2 col-span-6"
            >
              <ProductCard data={items} />
            </div>
          );
        })}
    </div>
  );
};

export default ProductsList;

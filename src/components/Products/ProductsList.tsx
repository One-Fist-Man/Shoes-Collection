import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {products?.length>0&&products?.map((items) => {
        return (
          <>
            <div key={items.Id} className="col-span-3" >
              <ProductCard data={items} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProductsList;

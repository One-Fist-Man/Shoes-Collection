"use client";
import { useEffect, useState } from "react";
import CartList from "../Cart/CartList";
import ProductsList from "./ProductsList";
import { Product } from "@/types/product";
import { useProducts } from "@/hooks/products";
import { useProductsStore } from "@/store/useStore";

const ProductsPage = ({
  productsList: initialProducts,
}: {
  productsList: Product[];
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { AllProducts, setAllProducts } = useProductsStore();

  const { data: productsData, error, isLoading } = useProducts(initialProducts);

  const filteredProducts = productsData?.filter((product: Product) =>
    product?.Name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  useEffect(() => {
    if (AllProducts.length !== filteredProducts.length) {
      setAllProducts(filteredProducts);
    }
  }, [filteredProducts]);

  if (isLoading) return <div>loding...</div>;

  return (
    <div className="flex flex-grow justify-between px-8 py-4">
      <div className=" w-[60%]">
        <input
          type="text"
          placeholder="Search products..."
          className="mb-4 p-1 border border-gray-300 rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className=" w-1/3 p-4">
          <ProductsList
            products={
              AllProducts.length === 0 && searchQuery.length === 0
                ? productsData
                : AllProducts
            }
          />
        </div>
      </div>
      <div className="  bg-gray-100 p-4 w-[40%]">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        <div className="flex flex-col justify-between">
          <CartList />
          <div className="flex justify-between">
            <p>Total:</p> <p>Tk 12,596.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

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
  const {
    AllProducts,
    AllProductsToShow,
    setAllProducts,
    setAllProductsToShow,
  } = useProductsStore();

  useEffect(() => {
    const storedProducts = JSON.parse(
      localStorage.getItem("AllProducts") || "[]"
    );
    if (storedProducts.length > 0) {
      setAllProducts(storedProducts);
      setAllProductsToShow(storedProducts);
    } else if (initialProducts) {
      setAllProducts(initialProducts);
      setAllProductsToShow(initialProducts);
    }
  }, [initialProducts, setAllProducts, setAllProductsToShow]);

  const { data: productsData, error, isLoading } = useProducts(initialProducts);

  useEffect(() => {
    const filteredProducts = AllProducts.filter((product) =>
      product?.Name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
    );
    setAllProductsToShow(filteredProducts);
  }, [searchQuery, AllProducts, setAllProductsToShow]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products.</div>;

  return (
    <div className="flex flex-grow justify-between px-8 py-4">
      <div className="w-[60%]">
        <input
          type="text"
          placeholder="Search products..."
          className="mb-4 p-1 border border-gray-300 rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="w-1/3 p-4">
          <ProductsList
            products={
              AllProductsToShow.length === 0 && searchQuery.length === 0
                ? productsData
                : AllProductsToShow
            }
          />
        </div>
      </div>
      <div className="bg-gray-100 p-4 w-[40%]">
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

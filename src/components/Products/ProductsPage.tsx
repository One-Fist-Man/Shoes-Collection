"use client";
import { Suspense, useEffect, useState } from "react";
import CartList from "../Cart/CartList";
import ProductsList from "./ProductsList";
import { Product } from "@/types/product";
import { useProducts } from "@/hooks/products";
import { useProductsStore } from "@/store/useStore";
import PageLoading from "../Loading/PageLoading";
import { notFound } from "next/navigation";

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

  if (isLoading)
    return (
      <div className="text-center mt-20">
        <PageLoading />{" "}
      </div>
    );
  if (error) notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search Products Here..."
          className="w-full p-2 border border-gray-300 rounded shadow-sm" //search section
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-between">
        <div className="w-full md:w-3/5">
          <ProductsList
            products={
              AllProductsToShow.length === 0 && searchQuery.length === 0
                ? productsData
                : AllProductsToShow
            }
          />
        </div>
        <div className="w-full md:w-2/5 mt-8 md:mt-0 md:ml-8 bg-gray-100 p-4 rounded shadow-sm">
          <CartList />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

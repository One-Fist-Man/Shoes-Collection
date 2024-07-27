import React from "react";
import { fetchProducts } from "@/utils/fetchProducts";
import ProductsPage from "@/components/Products/ProductsPage";

// export const revalidate = 60;

const Products: React.FC = async () => {
  const products = await fetchProducts();

  return <ProductsPage productsList={products.data} />;
};

export default Products;

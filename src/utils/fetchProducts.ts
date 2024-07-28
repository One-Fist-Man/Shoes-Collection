import { Product } from "../types/product";

// export async function fetchProducts(): Promise<Product[]> {
//   const response = await fetch("/path/to/your/products.json");
//   return response.json();
// }

export const fetchProducts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const fetchProductById = async (productId: string) => {
  const products = await fetchProducts();
  const product = products?.data?.find((p:Product) => p?.Id === productId) || null;
  return product;
};

import { notFound } from "next/navigation";
import { fetchProductById, fetchProducts } from "@/utils/fetchProducts";
import { Product } from "@/types/product";
import ProductDetails from "@/components/Products/ProductDetails";
import PageLoading from "@/components/Loading/PageLoading";
import { Suspense } from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export const revalidate = 40;

export async function generateStaticParams() {
  const products = await fetchProducts();
  const firstFiveProducts = products
    ?.slice(0, 5)
    ?.map((product: Product) => ({
      productId: product?.Id,
    }));
  return firstFiveProducts;
}

const ProductDetailsPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await fetchProductById(params?.productId);

  if (!product) {
    notFound();
  }

  return (
    <Suspense fallback={<PageLoading />}>
      <ProductDetails product={product} />
    </Suspense>
  );
};

export default ProductDetailsPage;

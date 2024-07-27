// import { QueryKeys } from "@/enums/enums";

import { Product } from "@/types/product";
import { fetchProducts } from "@/utils/fetchProducts";
import { useQuery } from "@tanstack/react-query";

export const useProducts = (initialData:Product[]) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const productsData = await fetchProducts();
      return productsData.data;
    },
    initialData,
    // enabled: true,
    refetchOnMount: false,
   
  });
};
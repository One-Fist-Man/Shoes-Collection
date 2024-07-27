import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartType, Product } from "../types/product";

interface StoreState {
  AllProducts: Product[];
  AllProductsToShow:Product[];
  AllCartProducts: CartType[];
  setAllProducts: (Products: Product[]) => void;
  setAllProductsToShow: (Products: Product[]) => void;
  setAllCartProducts: (CartProduct: CartType[]) => void;
  // removeFromCart: (productId: number) => void;
  // setProducts: (products: Product[]) => void;
}

export const useProductsStore = create<StoreState>()((set) => ({
  AllProducts: [],
  AllProductsToShow: [],
  AllCartProducts: [],
  setAllProductsToShow: (Products: Product[]) => set({ AllProductsToShow: Products }),
  setAllProducts: (Products: Product[]) => set({ AllProducts: Products }),
  setAllCartProducts: (CartProduct: CartType[]) =>
    set((state) => ({
      AllCartProducts:CartProduct ,
    })),
}));

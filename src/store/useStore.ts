import { create } from "zustand";
import { CartType, Product } from "../types/product";

interface StoreState {
  AllProducts: Product[];
  AllProductsToShow: Product[];
  AllCartProducts: CartType[];
  setAllProducts: (Products: Product[]) => void;
  setAllProductsToShow: (Products: Product[]) => void;
  setAllCartProducts: (CartProduct: CartType[]) => void;
}

const isClient = typeof window !== 'undefined';

export const useProductsStore = create<StoreState>((set) => ({
  AllProducts: isClient ? JSON.parse(localStorage.getItem("AllProducts") || "[]") : [],
  AllProductsToShow: isClient ? JSON.parse(localStorage.getItem("AllProductsToShow") || "[]") : [],
  AllCartProducts: isClient ? JSON.parse(localStorage.getItem("AllCartProducts") || "[]") : [],
  
  setAllProducts: (Products: Product[]) => {
    set((state) => ({
      AllProducts: Products,
      AllProductsToShow: Products
    }));
    if (isClient) {
      localStorage.setItem("AllProducts", JSON.stringify(Products));
      localStorage.setItem("AllProductsToShow", JSON.stringify(Products));
    }
  },

  setAllProductsToShow: (Products: Product[]) => {
    set({ AllProductsToShow: Products });
    if (isClient) {
      localStorage.setItem("AllProductsToShow", JSON.stringify(Products));
    }
  },

  setAllCartProducts: (CartProduct: CartType[]) => {
    set({ AllCartProducts: CartProduct });
    if (isClient) {
      localStorage.setItem("AllCartProducts", JSON.stringify(CartProduct));
    }
  }
}));

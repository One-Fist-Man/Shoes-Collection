export interface Product {
  Id: string;
  Name: string;
  SeName: string;
  ColorVariants: string | null;
  ShortDescription: string | null;
  FeaturedImageUrl: string;
  ProductPrice: {
    OldPrice: number;
    Price: number;
  };
  availableQuantity: number;
}

export interface CartType {
  Id: string;
  Name: string;
  SeName: string;
  ColorVariants: string | null;
  ShortDescription: string | null;
  FeaturedImageUrl: string;
  ProductPrice: {
    OldPrice: number;
    Price: number;
  };
  availableQuantity: number;
  Cartadded:number
}

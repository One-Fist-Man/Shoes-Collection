"use client";
import Image from "next/image";
import { CartType, Product } from "@/types/product";
import { useProductsStore } from "@/store/useStore";

const CartCard = ({ cartData }: { cartData: CartType }) => {
  const { AllCartProducts, AllProducts, setAllCartProducts, setAllProducts } = useProductsStore();

  const removeFromCart = (clickedCart: CartType) => {
    const updatedCart = AllCartProducts.filter(
      (item) => item.Id !== clickedCart.Id
    );
    setAllCartProducts(updatedCart);

    const updatedProducts = AllProducts.map((item) =>
      item.Id === clickedCart.Id
        ? { ...item, availableQuantity: item.availableQuantity + clickedCart.Cartadded }
        : item
    );
    setAllProducts(updatedProducts);
  };

  const incrementQuantity = (clickedCart: CartType) => {
    const updatedCart = AllCartProducts.map((item) =>
      item.Id === clickedCart.Id && item.availableQuantity > 0
        ? { ...item, Cartadded: item.Cartadded + 1, availableQuantity: item.availableQuantity - 1 }
        : item
    );
    setAllCartProducts(updatedCart);

    const updatedProducts = AllProducts.map((item) =>
      item.Id === clickedCart.Id && item.availableQuantity > 0
        ? { ...item, availableQuantity: item.availableQuantity - 1 }
        : item
    );
    setAllProducts(updatedProducts);
  };

  const decrementQuantity = (clickedCart: CartType) => {
    const updatedCart = AllCartProducts.map((item) =>
      item.Id === clickedCart.Id && clickedCart.Cartadded > 0
        ? { ...item, Cartadded: item.Cartadded - 1, availableQuantity: item.availableQuantity + 1 }
        : item
    );
    setAllCartProducts(updatedCart);

    const updatedProducts = AllProducts.map((item) =>
      item.Id === clickedCart.Id && clickedCart.Cartadded > 0
        ? { ...item, availableQuantity: item.availableQuantity + 1 }
        : item
    );
    setAllProducts(updatedProducts);
  };

  return (
    <div className="flex justify-between">
      <Image src={cartData.FeaturedImageUrl} alt="" height={50} width={50} />
      <div>
        <div className="flex">
          <p>{cartData.Name}</p>
        </div>
        <div className="flex">
          <span className="text-gray-400 line-through">
            {cartData.ProductPrice.Price}
          </span>
          <span className="ml-2 whitespace-nowrap font-bold">
            {cartData.ProductPrice.OldPrice}
          </span>
        </div>

        <div className="mr-2 flex items-center mt-2">
          <div className="mr-2 text-lg font-medium tracking-wide text-[#808080]">Qty: </div>
          <div className="flex h-8 w-full cursor-pointer items-center justify-between overflow-hidden rounded-[5px] border border-gray-400 text-xl">
            <button className="active:scale-100 p-2" onClick={() => decrementQuantity(cartData)}>
              -
            </button>
            <span className="text-lg">{cartData.Cartadded}</span>
            <button className="active:scale-100 p-2" onClick={() => incrementQuantity(cartData)}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={() => removeFromCart(cartData)}>
          <svg
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon-cross inline transition-all duration-300 w-3"
          >
            <path
              d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartCard;

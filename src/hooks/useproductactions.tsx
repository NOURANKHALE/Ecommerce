import { useDispatch } from "react-redux";
import { addToCart } from "@/slices/Cartslice";
import { addToWishlist } from "@/slices/Wishlistslice";
import { product } from "../types/products";

export const useProductActions = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: product) => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = (product: product) => {
    dispatch(addToWishlist(product));
  };

  return { handleAddToCart, handleAddToWishlist };
};

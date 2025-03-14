"use client";
import { Button } from "@/components/ui/button";
import { useProductActions } from "@/hooks/useproductactions";
import { product } from "@/types/products";
import { Heart } from "lucide-react";

export function AddToCartButton({ product }: { product: product }) {
  const { handleAddToCart } = useProductActions();

  return (
    <Button
      onClick={() => handleAddToCart(product)}
      className="bg-primary  py-2 w-full rounded-lg opacity-95 hover:opacity-100 transform transition-all duration-300 ease-in-out hover:scale-105 text-sm"
    >
      Add to Cart
    </Button>
  );
}

export function AddToWishlistButton({ product }: { product: product }) {
  const { handleAddToWishlist } = useProductActions();

  return (
    <button
      onClick={() => handleAddToWishlist(product)}
      className="absolute top-2 right-2 p-2 backdrop-blur-sm rounded-full shadow-md hover:bg-red-600 transition-colors duration-200 ease-in-out hover:scale-110 transform z-10"
      aria-label="Add to Wishlist"
    >
      <Heart className="w-5 h-5" />
    </button>
  );
}

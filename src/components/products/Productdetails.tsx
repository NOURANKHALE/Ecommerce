import { product } from "@/types/products";
import ProductRating from "./Productrating";
import ProductInfo from "./Productinfo";
import {AddToCartButton,AddToWishlistButton,} from "@/app/products/[id]/Productactions";

export default function ProductDetails({ product }: { product: product }) {
  return (
    <div className="Product_details w-full md:w-1/2 space-y-6">
      <h1 className="text-4xl font-bold">{product.title}</h1>
      <ProductRating product={product} />
      <p className="text-gray-600">{product.description}</p>
      <ProductInfo Product={product} />
      <div className="flex gap-4">
        <AddToCartButton product={product} />
        <AddToWishlistButton product={product} />
      </div>
    </div>
  );
}

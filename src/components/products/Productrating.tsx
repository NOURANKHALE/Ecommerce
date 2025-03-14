import { Star } from "lucide-react";
import { product } from "@/types/products";
export default function ProductRating({ product }: { product: product }) {
  return (
    <div className="Product_rating flex items-center gap-1" aria-label={`Rating: ${product.rating} out of 5`}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < Math.round(product.rating)
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }`}
          aria-hidden="true"
        />
      ))}
      <span className="text-sm text-muted-foreground ml-1">
        ({product.rating})
      </span>
    </div>
  );
}

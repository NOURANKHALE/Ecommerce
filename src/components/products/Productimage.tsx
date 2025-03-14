import { product } from "@/types/products";
import Image from "next/image";

export default function ProductImage({ Product }: { Product: product }) {
  return (
    <div className="Product_image w-full">
      <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
        <Image
          src={Product.thumbnail}
          alt={Product.title}
          fill
          className="object-contain"
          priority
          aria-label={`Image of ${Product.title}`}
        />
      </div>
    </div>
  );
}

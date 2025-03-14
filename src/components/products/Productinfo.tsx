import { product } from "@/types/products";

export default function ProductInfo({ Product }: { Product: product }) {
  return (
    <div>
      <p className=" bg-destructive px-2 py-1 rounded text-sm top-0 absolute">
        {Product.availabilityStatus}
      </p>
      <div className="flex items-center gap-4">
        <p className="text-sm font-bold text-primary">
          ${Product.price.toFixed(2)}
        </p>
        <p className="text-sm text-red-500">
          {Product.discountPercentage}% Off
        </p>
      </div>
    </div>
  );
}

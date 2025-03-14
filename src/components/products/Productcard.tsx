"use client";
import {Card,CardContent,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card";
import Link from "next/link";
import { ProductCardProps } from "@/types/Productcardprops";
import ProductRating from "@/components/products/Productrating";
import ProductInfo from "@/components/products/Productinfo";
import {AddToCartButton,AddToWishlistButton,} from "@/app/products/[id]/Productactions";
import ProductImage from "./Productimage";
export default function ProductCard({
  product,
  cardWidth = "w-49",
  imageHeight = "h-48",
  showFooter = true,
}: ProductCardProps) {
  return (
    <Card
      className={` p-0 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 ease-in-out group relative overflow-hidden ${cardWidth}`}>
      <CardHeader className="p-0 ">
        <AddToWishlistButton product={product} />
        <div className={` w-full overflow-hidden ${imageHeight}`}>
          <Link href={`/products/${product.id}`}>
            <ProductImage Product={product} />
          </Link>
        </div>
      </CardHeader>
      <CardTitle className="font-bold text-center text-sm">
        {product.title}
      </CardTitle>
      <CardContent className="flex flex-col p-4">
        <ProductInfo Product={product} />
        <ProductRating product={product} />
      </CardContent>
      {showFooter && (
        <CardFooter className="absolute bottom-0 left-0 right-0 p-3 backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
          <AddToCartButton product={product} />
        </CardFooter>
      )}
    </Card>
  );
}

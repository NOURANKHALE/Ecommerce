"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useProducts from "@/services/useproducts";
import ProductCard from "@/components/products/Productcard";
import { useCarousel } from "@/hooks/usecarousel";
import { useMemo } from "react";
export function BestSeller() {
  const products = useProducts();
  const bestSellingProducts = useMemo(() => {
    return products
      .filter((product) => product.rating >= 3)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6);
  }, [products]);

  const { currentIndex, handlePrevious, handleNext } = useCarousel(bestSellingProducts.length,4);
  return (
    <section className="Best_seller space-y-6 p-5 ">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">Best Selling Products</h1>
        <div className="flex gap-4 ">
          <button
            onClick={handlePrevious}
            className="p-2 bg-primary rounded-full transition-colors duration-300 hover:bg-primary/90"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 " />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-primary rounded-full transition-colors duration-300 hover:bg-primary/90"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 " />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {bestSellingProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[25%] flex-shrink-0 p-2 sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%]"
            >
              <ProductCard
                product={product}
                cardWidth="w-full"
                imageHeight="h-48"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

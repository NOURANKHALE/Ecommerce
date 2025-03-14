"use client";
import { useState, useMemo } from "react";
import ProductCard from "@/components/products/Productcard";
import { ProductListProps } from "@/types/productlistprops";
const ProductClient = ({ products }: ProductListProps) => {
  const categories = useMemo(() => [...new Set(products.map((product) => product.category))],[products]);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const toggleViewAll = (category: string) => {
    setExpandedCategories((prev) => ({...prev,[category]: !prev[category],}));
  };

  return (
    <div className="Products space-y-8">
      {categories.map((category) => {
        const categoryProducts = products.filter(
          (product) => product.category === category
        );
        const isExpanded = expandedCategories[category];
        const displayedProducts = isExpanded
          ? categoryProducts
          : categoryProducts.slice(0, 3);
        return (
          <section key={category}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold capitalize">{category}</h2>
              {categoryProducts.length > 3 && (
                <button
                  onClick={() => toggleViewAll(category)}
                  className="bg-primary text-white px-9 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 ease-in-out"
                >
                  {isExpanded ? "Show Less" : "View All"}
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};
export default ProductClient;

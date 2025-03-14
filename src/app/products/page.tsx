"use client";
import { useState } from "react";
import SearchBar from "@/components/Search";
import ProductList from "@/components/products/Productlist";
import useProducts from "@/services/useproducts";
import FilterSidebar from "@/components/Filter";
import { useFilteredProducts } from "@/hooks/usefilter";

export default function ProductsPage() {
  const products = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");

  const filteredProducts = useFilteredProducts(products, {
    searchTerm,
    selectedCategory,
    selectedPriceRange,
  });

  return (
    <div className="p-5 py-16 flex">
      <div className="w-1/12">
        <FilterSidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          searchTerm={""}
        />
      </div>

      <div className="w-5/6 p-4 ml-[16.67%]">
        <SearchBar onSearch={setSearchTerm} />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

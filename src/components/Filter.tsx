"use client";
import { FilterProps } from "@/types/Filterprops";
const categories = ["All", "beauty", "fragrances", "furniture", "groceries"];
const priceRanges = ["All", "0-50", "50-100", "100-150", "150+"];

export default function Filter({selectedCategory,setSelectedCategory,selectedPriceRange,setSelectedPriceRange,}: FilterProps) {
  return (
    <div>
      <h3 className="font-bold mb-4">Category</h3>
      {categories.map((category) => (
        <label key={category} className="flex items-center space-x-2 mb-2">
          <input
            type="radio"
            name="category"
            value={category}
            checked={selectedCategory === category}
            onChange={() =>
              setSelectedCategory && setSelectedCategory(category)
            }
            className="form-radio h-4 w-3 text-primary"
          />
          <span>{category}</span>
        </label>
      ))}

      <h3 className="font-bold mt-6 mb-4">Price</h3>
      {priceRanges.map((range) => (
        <label key={range} className="flex items-center space-x-2 mb-2">
          <input
            type="radio"
            name="priceRange"
            value={range}
            checked={selectedPriceRange === range}
            onChange={() =>
              setSelectedPriceRange && setSelectedPriceRange(range)
            }
            className="form-radio h-4 w-3 text-primary"
          />
          <span>
            {range === "All"
              ? "All"
              : range === "150+"
              ? "Over $150"
              : `$${range}`}
          </span>
        </label>
      ))}
    </div>
  );
}

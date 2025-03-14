import { product } from "@/types/products";
import { FilterProps } from "@/types/Filterprops";

export function useFilteredProducts(
  products: product[],
  filterOptions: FilterProps
) {
  const { searchTerm, selectedCategory, selectedPriceRange } = filterOptions;

  return products.filter((product) => {
    const matchesSearchTerm = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesPriceRange =
      selectedPriceRange === "All" ||
      (selectedPriceRange === "0-50" && product.price <= 50) ||
      (selectedPriceRange === "50-100" &&
        product.price > 50 &&
        product.price <= 100) ||
      (selectedPriceRange === "100-150" &&
        product.price > 100 &&
        product.price <= 150) ||
      (selectedPriceRange === "150+" && product.price > 150);

    return matchesSearchTerm && matchesCategory && matchesPriceRange;
  });
}

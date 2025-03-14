export interface FilterProps {
    searchTerm: string;
    selectedCategory: string;
    setSelectedCategory?: (category: string) => void;
    selectedPriceRange: string;
    setSelectedPriceRange?: (range: string) => void;

  }

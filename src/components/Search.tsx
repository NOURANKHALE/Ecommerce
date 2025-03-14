"use client";
import useSearch from "@/hooks/usesearch";
import { UseSearchBarProps } from "@/types/Search";

const SearchBar = ({ onSearch }: UseSearchBarProps) => {
  const { searchTerm, handleChange, handleClear } = useSearch({ onSearch });
  return (
    <div className="Search flex justify-center items-center px-4">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Search for products..."
          className="p-3 mb-4 border border-gray-300 rounded-full w-full text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          value={searchTerm}
          onChange={handleChange}
          aria-label="Search for products"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Clear search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

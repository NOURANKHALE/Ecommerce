"use client";
import { UseSearchBarProps } from "@/types/Search";
import { useState, useEffect } from "react";

const useSearch = ({ onSearch }: UseSearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(searchTerm);
    }, 50);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, onSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  return { searchTerm, handleChange, handleClear };
};

export default useSearch;

import { useEffect, useState } from "react";
import { product } from "@/types/products";

export default function useProducts() {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    }

    fetchProducts();
  }, []);

  return products;
}

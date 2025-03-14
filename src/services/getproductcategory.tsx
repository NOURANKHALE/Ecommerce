import { product } from "@/types/products";

export async function getCategoryProducts(category: string): Promise<product[]> {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch products for category: ${category}`);
    }

    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching category products:", error);
    throw error; 
  }
}
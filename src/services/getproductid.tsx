import { product } from "@/types/products";

export async function getProduct(id: string): Promise<product | null> {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

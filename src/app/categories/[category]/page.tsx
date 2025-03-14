import { getCategoryProducts } from "@/services/getproductcategory";
import ProductClient from "@/components/products/Productlist";
import { CategoryPageProps } from "@/types/Categoryprop";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const products = await getCategoryProducts(category);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 capitalize">{category}</h1>
      <ProductClient products={products} />
    </div>
  );
}
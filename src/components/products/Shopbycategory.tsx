"use client";
import Image from "next/image";
import Link from "next/link";
import useProducts from "@/services/useproducts";
export default function Shopbycategory() {
  const products=useProducts();
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <section className="Shop_by_category py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold ">
          Shop by Category
        </h2>
        <div className="flex flex-wrap justify-center gap-14">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/categories/${category}`}
              className="flex flex-col items-center"
            >
              <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={`/assets/categories/${category}.jpg`}
                  alt={category}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium  capitalize">
                {category}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
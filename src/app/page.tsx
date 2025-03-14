import { BestSeller } from "@/components/products/Bestseller";
import Shopbycategory  from "@/components/products/Shopbycategory";
import Hero from "@/components/Hero";
import AboutUs from "@/components/Aboutus";
import ProductGrid from "@/components/products/Productgrid";

export default async function Home() {
  return (
    <main className="container mx-auto ">
      <Hero />
       <Shopbycategory />
          <BestSeller />
          <AboutUs />
          <ProductGrid  />
          
    </main>
  );
}



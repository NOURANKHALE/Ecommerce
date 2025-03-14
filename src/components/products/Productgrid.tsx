"use client";
import { motion } from "framer-motion";
import useProducts from "@/services/useproducts";
import ProductCard from "@/components/products/Productcard";

export default function ProductGrid() {
  const products = useProducts();
  const shuffledProducts = products.sort(() => Math.random() - 0.5).slice(0, 7);
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <h1 className="Shop_products text-2xl font-bold text-center my-6">
        Shop Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
        {shuffledProducts.map((product, index) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

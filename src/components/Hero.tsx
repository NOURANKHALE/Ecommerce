"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="Hero container flex items-center justify-center p-9 ">
      <div className=" w-full rounded-3xl bg-gradient-to-r from-primary via-green-700 to-green-900 p-12 text-accent flex items-center transition-all duration-500 hover:shadow-2xl hover:scale-105">
        <div className=" w-1/2 space-y-6 text-center">
          <h2 className="text-4xl font-semibold transition-all duration-300 hover:scale-105">
            Get <span className="text-yellow-300 animate-pulse">45% off</span> on all
          </h2>
          <h2 className="text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 transition-all duration-300 hover:scale-105">
            Super Products
          </h2>
          <div className="space-y-4">
            <Link href="/products" className=" rounded-full bg-accent px-12 py-3 text-primary font-semibold shadow-lg transition-all duration-300  ">
            Shop Now
          </Link>
          </div>
          
        </div>
        <div className=" w-1/2 flex justify-end">
          <div className="relative w-full h-64  ">
            <Image
              src="/assets/discount.jpg"
              alt="hero"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
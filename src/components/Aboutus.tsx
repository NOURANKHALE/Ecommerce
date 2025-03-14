"use client";
import React from "react";
import { features } from "@/constants/Aboutdata";
export default function AboutUs () {
  return (
    <div className="Aboutus container mx-auto px-7 py-10" id="about">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-8">
          About Us
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`p-7 rounded-tl-3xl rounded-br-3xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${feature.bgColor}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full mb-6">
                  {feature.icon}
                </div>
                <h2 className={`text-2xl font-bold ${feature} mb-4`}>
                  {feature.title}
                </h2>
                <p className={`text-sm ${feature} opacity-90`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};


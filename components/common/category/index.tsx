"use client";
import { poppins } from "@/components/navbar/Menu";
import React from "react";
import CategoriesFocus from "./CategoriesFocus";
import Categories from "./Categories";

const Category = () => {
  return (
    <div className="bg-[#1f1f1f] mb-[20px] w-full overflow-hidden">
      <div className="max-w-[1400px] w-full px-[20px] mx-auto">
        <div className={`block relative p-0 ${poppins.className}`}>
          <CategoriesFocus />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Category;

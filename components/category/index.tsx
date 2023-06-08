"use client"
import React from "react";
import Genres from "@/components/common/genres/Genres";
import GenresFocus from "@/components/common/genres/GenresFocus";
import { poppins } from "@/components/navbar/Menu";

const Category = () => {
  return (
    <div className="bg-[#1f1f1f] mb-[20px] w-full overflow-hidden">
      <div className="max-w-[1400px] w-full px-[20px] mx-auto">
        <div className="block relative p-0">
          <div className={`${poppins.className}`}>
            <GenresFocus />
            <Genres />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

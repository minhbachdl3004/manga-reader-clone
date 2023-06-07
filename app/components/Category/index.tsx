"use client"
import React from "react";
import GenresFocus from "../common/genres/GenresFocus";
import Genres from "../common/genres/Genres";
import { poppins } from "../navbar/Menu";

const Category = () => {
  return (
    <div className="bg-[#1f1f1f] mb-[20px] box-border">
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

"use client";
import React from "react";
import { poppins } from "@/components/navbar/Menu";
import { Heading2 } from "@/components/common/heading/Header";
import Genres from "@/components/common/genres/Genres";
import Chapter from "@/components/common/chapter/Chapter";

const arr = [1, 2, 3];
const genres = ["Comedy", "Sci-fi", "Shounen"];

interface Props {
  title: string;
}

const Detail = ({ title }: Props) => {
  return (
    <div className={`latest-manga-detail ${poppins.className}`}>
      <Heading2
        styles="text-[#ddd] max-h-[28px] text-[20px] leading-[1.4em] mb-[10px] font-semibold relative"
        title={title}
      />
      <Genres
        styles="mb-[15px] block text-ellipsis whitespace-nowrap overflow-hidden"
        textColor="text-[#ddd]"
      />
      <div className="absolute bottom-0 left-0 right-0 pr-[10px]">
        {arr.map((arr, i) => (
          <div
            key={i}
            className="flex items-start text-left text-[0.9em] mb-[5px] px-[2px] py-[5px]"
            style={{ borderBottom: "1px dashed #464242" }}
          >
            <Chapter />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;

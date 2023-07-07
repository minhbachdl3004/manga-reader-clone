"use client";
import React from "react";
import { poppins } from "@/components/navbar/Menu";

interface Props {
  rank: string;
  name: string;
}

const Ranking = ({ rank, name }: Props) => {
  rank.length === 1 ? rank = '0' + rank : rank;
  return (
    <div
      className={`bg-[#4f4f4f] absolute left-0 top-0 bottom-0 overflow-hidden w-[40px] text-center font-semibold cursor-default pt-[10px] pl-[40px] text-[#fff] ${poppins.className}`}
      style={{
        background: "linear-gradient(0deg,rgba(79,79,79,0) 0,#4f4f4f 100%)",
      }}
    >
      <span className="absolute bottom-0 top-auto text-[30px] w-[40px] leading-[40px] text-left text-[#fff] z-[9] left-0 -rotate-90 font-bold">
        {rank}
      </span>
      <div
        className="p-[10px] text-[#fff] absolute top-0 left-0 bottom-0 right-0 w-[200px] h-[40px] text-left whitespace-nowrap text-ellipsis overflow-hidden"
        style={{ transform: "translate(-80px,80px) rotate(-90deg)" }}
      >
        {name}
      </div>
    </div>
  );
};

export default Ranking;

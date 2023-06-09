"use client";
import React from "react";

interface Props {
  number: string;
}

const RankingNumber = ({ number }: Props) => {
  return (
    <div className="bg-[#2f2f2f] text-[#ddd] absolute w-[40px] h-[40px] text-center right-0 top-[8px] cursor-default">
      <span
        className="text-[#c49bff] font-semibold text-[20px] absolute top-[50%] left-[50%]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {number}
      </span>
    </div>
  );
};

export default RankingNumber;

"use client";
import React from "react";

interface Props {
  isDisplay: boolean;
}

const Tick = ({ isDisplay }: Props) => {
  return (
    <span
      className={`bg-[#99f42c] text-[#111] bottom-auto left-[5px] top-[5px] font-bold text-[12px] leading-[25px] z-[10] px-[6px] rounded-[3px] mr-[3px] ${
        isDisplay === true ? "" : "lg:hidden"
      } absolute`}
    >
      EN/FR/JA
    </span>
  );
};

export default Tick;

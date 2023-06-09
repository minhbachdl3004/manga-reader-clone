"use client";
import React from "react";
import { MangaPoster3 } from "@/components/common/MangaPoster";
import RankingNumber from "./RankingNumber";
import Detail from "@/components/common/detail/Detail";
import { Heading1 } from "@/components/common/heading/Header";
import Genres from "@/components/common/genres/Genres";
import Chapter from "@/components/common/chapter/Chapter";

const MangaCard = () => {
  return (
    <div className="relative pr-[60px] py-[15px] pl-[80px] mb-[10px]">
      <RankingNumber number="01" />
      <MangaPoster3 styles="poster-most-viewed"></MangaPoster3>
      <Detail styles="min-h-auto text-[14px] leading-[1.4em] block">
        <Heading1
          styles="text-[15px] font-semibold leading-[1.4em] mb-[5px] overflow-hidden"
          title="One Piece"
        />
        <div className="text-[.9em] text-[#ddd] whitespace-normal overflow-hidden text-ellipsis">
          <span>EN/FA/JA</span>
          <span className="w-[4px] h-[4px] rounded-[50%] bg-[#666] inline-block my-[3px] mx-[6px]"></span>
          <Genres styles="inline" textColor="text-[#ddd]" />
          <span
            className=" absolute bottom-[15px] right-0 px-[6px] rounded-[4px] text-[#aaa] text-[12px]"
            style={{ border: "1px solid #3f3f3f" }}
          >
            7,209 views
          </span>
          <Chapter styles="block mt-[5px]" />
        </div>
      </Detail>
    </div>
  );
};

export default MangaCard;

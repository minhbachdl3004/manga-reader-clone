"use client";
import React from "react";
import { Heading2 } from "@/components/common/heading/Header";
import Genres from "@/components/common/genres/Genres";
import { poppins } from "@/components/navbar/Menu";
import Chapter from "@/components/common/chapter/Chapter";
import { chapterProps } from "utils/type";

interface Props {
  name: string;
  latestChapters: any[];
  genres: string[];
  genre?: string;
  link?: string;
}

const Detail = ({ latestChapters, genres, name, link }: Props) => {
  return (
    <div className={`latest-manga-detail ${poppins.className}`}>
      <Heading2
        styles="text-[#ddd] max-h-[28px] text-[20px] leading-[1.4em] mb-[10px] font-semibold relative"
        title={name}
        link={link ? link : ""}
      />
      <Genres
        genres={genres}
        styles="mb-[15px] block text-ellipsis whitespace-nowrap overflow-hidden"
        textColor="text-[#ddd]"
      />
      <div className="absolute bottom-0 left-0 right-0 pr-[10px]">
        {latestChapters.map((chapter : chapterProps, i) => (
          <div
            key={i}
            className="flex items-start text-left text-[0.9em] mb-[5px] px-[2px] py-[5px]"
            style={{ borderBottom: "1px solid #554e4e" }}
          >
            <Chapter styles="" chapterLink={`${link}/${chapter._id}`} chapterNumber={chapter.chapterName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;

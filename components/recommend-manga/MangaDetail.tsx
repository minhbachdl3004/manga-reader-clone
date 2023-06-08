"use client";
import React from "react";
import Link from "next/link";
import { poppins } from "@/components/navbar/Menu";

interface Props {
  title: string;
  genres: string[];
}

const MangaDetail = ({ title, genres }: Props) => {
  return (
    <div className={`py-[10px] px-0 overflow-hidden ${poppins.className}`}>
      <h3
        className="text-[1em] leading-[1.4] overflow-hidden font-semibold mb-[0.5rem]"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        <Link
          href="/"
          className="text-[#ddd] outline-none bg-transparent font-semibold hover:text-[#c49bff]"
        >
          {title}
        </Link>
      </h3>
      <div className="text-[0.9em] text-[#8f95aa]">
        {genres.map((genre, i) => (
          <Link
            href={`/${genre}`}
            key={i}
            className="text-[#999] hover:text-[#c49bff]"
          >
            {genre}{i !== genres.length - 1 ? ", " : ""}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MangaDetail;

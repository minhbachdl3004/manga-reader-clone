"use client";
import React from "react";
import Link from "next/link";

interface Props {
  genres: string[];
  styles: string;
  textColor: string;
}

const Genres = ({ genres, styles, textColor }: Props) => {
  return (
    <div className={`${styles}`}>
      <span className="text-[13px] text-[#7f7e99]">
        {genres && genres.slice(0, 3).map((genre, i) => (
          <Link
            key={i}
            href="/"
            className={`${textColor} hover:text-[#c49bff] font-normal`}
          >
            {genre}
            {i < 2 && genres.length > 1 ? ", " : ""}
          </Link>
        ))}
      </span>
    </div>
  );
};

export default Genres;

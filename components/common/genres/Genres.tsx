"use client";

import React from "react";
import Link from "next/link";

const genres = ["Action", "Adventure"];

interface Props {
  styles: string;
  textColor: string;
}

const Genres = ({ styles, textColor }: Props) => {
  return (
    <div className={`${styles}`}>
      <span className="text-[13px] text-[#7f7e99]">
        {genres.map((genre, i) => (
          <Link
            key={i}
            href="/"
            className={`${textColor} hover:text-[#c49bff] font-normal`}
          >
            {genre}
            {i !== genres.length - 1 ? ", " : ""}
          </Link>
        ))}
      </span>
    </div>
  );
};

export default Genres;

"use client";
import React from "react";
import Link from "next/link";
import { apiUrl, homepageUrl } from "utils/urlConfig";

interface Props {
  genres: string[];
  styles: string;
  textColor: string;
  type?: 1 | 2;
}

const Genres = ({ type = 2, genres, styles, textColor }: Props) => {
  return (
    <div className={`${styles}`}>
      {type === 1 ? (
        <div className="flex gap-[10px]">
          {genres.length > 0
            ? genres.map((genre, i) => (
                <Link
                  href={`/genre/${genre.toLowerCase()}`}
                  key={i}
                  className="flex justify-center items-center rounded-[0.3rem] py-[0.25rem] px-[0.5rem] bg-[#3f3f3f] text-[#ddd] text-[.85em] hover:text-[#c49bff] cursor-pointer"
                >{genre}</Link>
              ))
            : null}
        </div>
      ) : (
        <div className={`${styles}`}>
          <span className="text-[13px] text-[#7f7e99]">
            {genres &&
              genres.slice(0, 3).map((genre, i) => (
                <Link
                  key={i}
                  href={`/genre/${genre.toLowerCase()}`}
                  className={`${textColor} hover:text-[#c49bff] font-normal`}
                >
                  {genre}
                  {i < 2 && genres.length > 1 ? ", " : ""}
                </Link>
              ))}
          </span>
        </div>
      )}
    </div>
  );
};

export default Genres;

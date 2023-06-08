"use client";
import React, { useState } from "react";
import Link from "next/link";

const items = [
  "Action",
  "Adventure",
  "Cars",
  "Comedy",
  "Dementia",
  "Demons",
  "Doujinshi",
  "Drama",
  "Ecchi",
  "Fantasy",
  "Game",
  "Gender Bender",
  "Harem",
  "Hentai",
  "Historical",
  "Horror",
  "Josei",
  "Kids",
  "Magic",
  "Martial Arts",
  "Mecha",
  "Military",
  "Music",
  "Mystery",
  "Parody",
  "Police",
  "Romance",
  "Samurai",
  "School",
  "Sci-fi",
];

const Genres = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      {items.map((item, i) => (
        <div
          key={i}
          className={`inline-block float-left mr-[5px] mb-[5px] text-[#ddd]  ${
            i > 21 && !open ? "hidden" : ""
          }`}
        >
          <Link
            href={`/${item.toLowerCase()}`}
            className="bg-[#2f2f2f] text-[#ddd] genres hover:text-[#c49bff]"
          >
            {item}
          </Link>
        </div>
      ))}
      <div
        className="inline-block float-left mr-[5px] mb-[5px] text-[#ddd]"
        onClick={handleOpen}
      >
        {open ? null : (
          <Link
            href="/"
            className="bg-[#2f2f2f] text-[#ddd] genres hover:text-[#c49bff]"
          >
            + More
          </Link>
        )}
      </div>
    </div>
  );
};

export default Genres;

"use client";
import React, { useState } from "react";
import Link from "next/link";

const items = [
  { title: "Action", link:"action" },
  { title: "Adventure", link:"adventure" },
  { title: "Cars", link:"cars" },
  { title: "Comedy", link:"comedy" },
  { title: "Dementia", link:"dementia" },
  { title: "Demons", link:"demons" },
  { title: "Doujinshi", link:"doujinshi" },
  { title: "Drama", link:"drama" },
  { title: "Ecchi", link:"ecchi" },
  { title: "Fantasy", link:"fantasy" },
  { title: "Game", link:"game" },
  { title: "Gender Bender", link:"gender-bender" },
  { title: "Harem", link:"harem" },
  { title: "Hentai", link:"hentai" },
  { title: "Historical", link:"historical" },
  { title: "Horror", link:"horror" },
  { title: "Josei", link:"josei" },
  { title: "Kids", link:"kids" },
  { title: "Magic", link:"magic" },
  { title: "Martial Arts", link:"marital-arts" },
  { title: "Mecha", link:"mecha" },
  { title: "Military", link:"military" },
  { title: "Music", link:"music" },
  { title: "Mystery", link:"mystery" },
  { title: "Parody", link:"parody" },
  { title: "Police", link:"police" },
  { title: "Psychological", link:"psychological" },
  { title: "Romance", link:"romance" },
  { title: "Samurai", link:"samurai" },
  { title: "School", link:"School" },
  { title: "Sci-fi", link:"scifi" },
  { title: "Seinen", link:"seinen" },
  { title: "Shoujo", link:"shoujo" },
  { title: "Shoujo Ai", link:"shoujo-ai" },
  { title: "Shounen", link:"shounen" },
  { title: "Shounen Ai", link:"shounen-ai" },
  { title: "Slice of Life", link:"slice-of-life" },
  { title: "Space", link:"space" },
  { title: "Sports", link:"sports" },
  { title: "Super power", link:"super-power" },
  { title: "Supernatural", link:"supernatural" },
  { title: "Thriller", link:"thriller" },
  { title: "Vampire", link:"vampire" },
  { title: "Yaoi", link:"yaoi" },
  { title: "Yuri", link:"yuri" },
];

const Categories = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      {items.map((item, i) => (
        <div
          key={i}
          className={`inline-block float-left mr-[5px] mb-[5px] text-[#ddd]  ${
            i > 21 && !open ? "hidden" : ""
          }`}
        >
          <Link
            href={`/genre/${item.link}`}
            className="bg-[#2f2f2f] text-[#ddd] genres hover:text-[#c49bff]"
          >
            {item.title}
          </Link>
        </div>
      ))}
      <div
        className="inline-block float-left mr-[5px] mb-[5px] text-[#ddd]"
        onClick={handleOpen}
      >
        {open ? null : (
          <a className="bg-[#2f2f2f] text-[#ddd] genres hover:text-[#c49bff] cursor-pointer">
            + More
          </a>
        )}
      </div>
    </>
  );
};

export default Categories;
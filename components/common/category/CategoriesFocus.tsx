"use client"
import React from "react";
import Link from "next/link";

const items = [
  { title: "Latest Updated", icon: "⚡", bg: "bg-[#d0e6a5]" },
  { title: "New Release", icon: "✌", bg: "bg-[#ffdd95]" },
  { title: "Most Viewed", icon: "🔥", bg: "bg-[#ccabda]" },
  { title: "Completed", icon: "✅", bg: "bg-[#abccd8]" },
];

const CategoriesFocus = () => {
  return (
    <div className="text-[#ddd]">
      <div className="">
        {items.map((item, i) => (
          <Link
            href="/"
            key={i}
            className={`float-left mr-[5px] mb-[5px] text-[#3a3838] hover:text-[#000000] genres ${item.bg}`}
          >
            <i className="mr-[0.25rem]">{item.icon}</i>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesFocus;

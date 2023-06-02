"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Poppins } from "next/font/google";

interface mangaItemsProps {
  title: string;
  link: string;
}

const mangaItems : mangaItemsProps[] = [
  { title: "Manga", link: "manga" },
  { title: "One-shot", link: "one-shot" },
  { title: "Doujinshi", link: "doujinshi" },
  { title: "Light Novel", link: "light-novel" },
  { title: "Manhwa", link: "manhwa" },
  { title: "Manhua", link: "manhua" },
  { title: "Comic", link: "comic" },
];

const menuItems = [{ title: "A-Z List" }, { title: "News" }];
const liStyles =
  "inline-block m-0 mr-[20px] relative text-[#fff] hover:text-[#ffd702]";
const linkStyles =
  "h-[40px] cursor-pointer leading-[40px] m-0 px-[10px] inline-block text-[16px] font-medium";

export const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["400", "500", "700"],
});

const Menu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<number>(0);
  return (
    <div className={`h-[40px] my-[15px] float-left ${poppins.className}`}>
      <ul className="list-none block">
        <li className={liStyles}>
          <Link href="/completed" className={linkStyles}>
            Completed
          </Link>
        </li>
        <li
          className={`${liStyles}`}
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <Link href="javascript:;" className={`${linkStyles} relative`}>
            Types
            <FaAngleDown
              style={{
                display: "inline-block",
                marginLeft: "5px",
                marginTop: "-3px",
              }}
            />
          </Link>
          <div
            className={`${
              showMenu ? "" : "hidden"
            } bg-[#3f3f3f] absolute top-full left-0 min-w-[150px] rounded-[12px] z-102 shadow-custom`}
          >
            <ul className="p-[8px] text-left list-none overflow-hidden">
              {mangaItems.map((item, i) => (
                <li className={`list-none`} key={i}>
                  <Link
                    href={item.link}
                    className={`py-[6px] px-[10px] block text-[14px] rounded-[8px] ${isSelected === i ? 'text-[#c49bff]' : 'text-[#ddd]'} hover:text-[#c49bff] hover:bg-[#4f4f4f]`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        {menuItems.map((item, i) => (
          <li key={i} className={liStyles}>
            <Link href={`/${item.title}`} className={linkStyles}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

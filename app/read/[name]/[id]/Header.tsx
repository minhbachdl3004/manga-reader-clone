"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { poppins } from "@/components/navbar/Menu";
import { IoIosArrowDown } from "react-icons/io";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";
import { IconContext } from "react-icons";

interface Props {
  link: string;
  name: string;
  currentChapter: string;
  chapters: any;
}

const title = [
  {
    title: "Reading",
  },
  {
    title: "Language [EN]",
  },
];

const Header = ({ link, name, chapters, currentChapter }: Props) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [showChapterList, setShowChapterList] = useState<boolean>(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavbarVisible(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full ${
        isNavbarVisible ? "fixed" : "absolute"
      } h-[70px] bg-[#222] z-[999] px-[20px] ${poppins.className}`}
    >
      <Link href="/" className="block h-[50px] my-[10px] mr-[40px] float-left">
        <Image
          src="https://mangareader.to/images/logo.png"
          alt=""
          width={160}
          height={50}
          className="h-full w-auto float-left"
        />
      </Link>
      <div className="hr-line"></div>
      <Link
        href={link}
        className="float-left h-[70px] w-[200px] relative hr-manga"
      >
        <h2 className="manga-name">{name}</h2>
      </Link>
      <div className="hr-navigation">
        {title.map((title, i) => (
          <div
            key={i}
            className="float-left h-[30px] leading-[30px] relative mr-[5px] bg-[#333] flex justify-center items-center p-[15px] text-[13px] text-[#fff] font-medium rounded-[4px]"
          >
            {title.title}
          </div>
        ))}
        <div
          className={`${
            showChapterList
              ? "bg-[#ffd702] text-[#111]"
              : "bg-[#333] text-[#fff]"
          } float-left h-[30px] leading-[30px] relative mr-[5px] flex justify-center items-center p-[15px] text-[13px] font-medium rounded-[4px] gap-[5px] relative"
          `}
          role="button"
          onClick={() => setShowChapterList(!showChapterList)}
        >
          {currentChapter}
          <IconContext.Provider value={{}}>
            <IoIosArrowDown className="pb-[3px] font-bold text-[18px]" />
          </IconContext.Provider>
        </div>
        <div
          className={`dropdown-menu dropdown-menu-model dropdown-menu-fixed overflow-auto pb-[10px] ${
            showChapterList ? "block" : "hidden"
          }`}
        >
          <div className="grid grid-cols-4 gap-[5px] px-[5px]">
            {chapters &&
              chapters.map((chapter: any, i: number) => (
                <Link
                  href={`/read${link}/${chapter.chapterId
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  key={i}
                  className="p-[15px] max-h-[36px] flex justify-start items-center  rounded-[4px] bg-[#2f2f2f] hover:text-[#c49bff] text-[12px]"
                >
                  {chapter.chapterId}: {chapter.chapterName}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

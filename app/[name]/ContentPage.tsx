"use client";
import React, { ChangeEvent, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { Heading1 } from "@/components/common/heading/Header";
import Link from "next/link";
import { MdOutlineVisibility } from "react-icons/md";
import Genres from "@/components/common/genres/Genres";
import { poppins } from "@/components/navbar/Menu";
import { MangaProps, chapterProps } from "utils/type";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import Category from "@/components/common/category";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { FaGlasses } from "react-icons/fa";

interface Props {
  manga: MangaProps;
}

const PageContent = ({ manga }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isHoverChapter, setIsHoverChapter] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");
  const [highlightedChapter, setHighlightedChapter] = useState<string | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement>(null);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
    setHighlightedChapter(event.target.value);
  }

  useEffect(() => {
      const chapter = containerRef.current?.querySelector<HTMLElement>(`[data-number="${inputValue}"]`);
      const container = containerRef.current;
      if (chapter && container) {
        const offsetTop = chapter.offsetTop;
        const containerHeight = container.clientHeight;
        const chapterHeight = chapter.clientHeight;
        if (offsetTop < container.scrollTop || offsetTop + chapterHeight > container.scrollTop + containerHeight) {
          container.scrollTo({ top: offsetTop - (containerHeight - chapterHeight) / 2, behavior: 'smooth' });
        }
      }
  }, [inputValue]);

  return (
    <div className={`${poppins.className}`}>
      <div className={`w-screen bg-[#2f2f2f] px-[20px]`}>
        <div className={`py-[60px] relative flex ${poppins.className} max-lg:w-full max-lg:flex-col`}>
          <div
            className="min-w-[180px] h-[270px] relative rounded-[10px] mr-[30px] max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:right-auto max-lg:z-[9] max-lg:mx-auto max-lg:mb-[15px] max-xl:w-[140px]"
            style={{ border: "3px solid #fff" }}
          >
            <Image
              alt=""
              src={manga.poster}
              fill
              className="object-cover"
            ></Image>
          </div>
          <div className="flex w-full min-h-[300px] pt-[5px] max-lg:text-center max-lg:flex-col max-lg:items-center">
            <div className="flex flex-col gap-[15px] w-[70%] max-lg:w-full mr-[20px] max-lg:mr-0">
              <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-[28px] text-[#fff] font-semibold">{manga.name}</h3>
              <Heading1
                title={manga.otherName}
                link=""
                styles="text-[16px] mb-[10px] max-lg:mb-0"
                textColor="text-[#999]"
              />
              <div className="flex gap-[10px] max-lg:justify-center max-lg:items-center mb-[10px]">
                <Link
                  href=""
                  className="flex justify-center items-center leading-[42px] px-[1.2rem] rounded-[0.4rem] bg-[#ffd702] text-[#111] text-[16px] font-medium cursor-pointer hover:bg-[#f5df18]"
                >
                  <MdOutlineVisibility
                    style={{
                      display: "inline-block",
                      marginRight: "5px",
                      height: "16px",
                      width: "16px",
                    }}
                  />
                  Read Now
                </Link>
                <Link
                  href=""
                  className="flex justify-center items-start p-[1rem] bg-[#3f3f3f] rounded-[0.4rem] cursor-pointer font-black"
                  onMouseOut={() => setIsHover(false)}
                  onMouseOver={() => setIsHover(true)}
                >
                  <IconContext.Provider value={{}}>
                    {isHover ? (
                      <BsFillBookmarkFill className="text-[#c49bff]" />
                    ) : (
                      <BsBookmark />
                    )}
                  </IconContext.Provider>
                </Link>
              </div>
              <Genres genres={manga.genres} type={1} styles="float-left" textColor="" />
              <div
                className={`three-lines text-[#fff] text-[13px] max-w-[624px] max-lg:text-left`}
              >
                {manga.description}
              </div>
            </div>
            <div className="flex flex-col gap-[5px] max-lg:justify-self-start px-[20px] ml-[20px] w-[50%] max-lg:w-full max-lg:ml-0 max-lg:px-0 max-lg:my-[20px]">
              {Object.entries(manga.moreInfo).map(([key, value]) => {
                return (
                  <div key={key} className="max-lg:text-left">
                    <span className="text-[#fff] font-semibold mr-[5px] text-[.9em]">
                      {key}:
                    </span>
                    <Link
                      href="/"
                      className="text-[#fff] text-[.9em] hover:text-[#c49bff]"
                    >
                      {manga.moreInfo[key]}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className={``}></div>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-[15px] relative overflow-hidden px-[15px] py-[10px] mt-[20px] mb-[40px] max-lg:flex-col">
        <div className="w-2/3 flex flex-col max-lg:w-full max-lg:pr-0 pr-[20px]">
          <div className="block w-full">
            <div className="" style={{ borderBottom: "5px solid #5f25a6" }}>
              <Link
                href="#list-chapter"
                className="bg-[#5f25a6] text-[#fff] border-none px-[20px] leading-[45px] font-medium h-full py-[18px] overflow-hidden"
              >
                List Chapter
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div
              className="bg-[#3f3f3f] w-full text-[#ddd] p-[10px] z-[100] relative max-lg:flex max-lg:flex-col max-lg:gap-[10px]"
              style={{ boxShadow: "0 10px 10px rgba(0, 0, 0, .05" }}
            >
              <div className="max-lg:w-full relative float-left py-[6px] pl-[5px] text-[14px] text-[#ddd]">
                Language: EN
              </div>
              <div className="max-lg:w-full float-right w-[200px] relative">
                <form action="" className="flex justify-center items-center">
                  <AiOutlineSearch
                    style={{
                      position: "absolute",
                      left: 10,
                      width: "14px",
                      height: "!4px",
                    }}
                  />
                  <input
                    type="text"
                    className="bg-[#5f5f5f] w-full pl-[35px] rounded-[4px] outline-none border-none p-[6px] text-[14px]"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Number of chapter"
                  />
                </form>
              </div>
            </div>
            <div
              ref={containerRef}
              className="max-h-[490px] m-0 overflow-x-hidden overflow-y-auto"
            >
              {manga.chapters.map((chapter: chapterProps) => (
                <div
                  key={chapter._id}
                  data-number={chapter.chapterId.split(" ")[1]}
                  className="block w-full mr-[1px] text-[12px] border-bottom-black"
                  onMouseOut={() => setIsHoverChapter(false)}
                  onMouseOver={() => setIsHoverChapter(true)}
                >
                  <Link
                    href={`/${
                      manga.name
                        .toLowerCase()
                        .replace(/\s/g, "-")
                        .replace(/[^a-zA-Z0-9-]/g, "") + `-${manga.mangaId}`}/${chapter._id}`}
                    className={`bg-[#2f2f2f] text-[#ddd] px-[15px] py-[10px] relative flex justify-between ${
                      highlightedChapter === chapter.chapterId.split(" ")[1]
                        ? "chapter-highlight" : isHoverChapter ? "hover:text-[#c49bff]"
                        : ""
                    }`}
                  >
                    <span className="font-medium text-[13px] max-w-full block text-ellipsis overflow-hidden whitespace-nowrap mt-[5px]">
                      {chapter.chapterId}: {chapter.chapterName}
                    </span>
                    <span
                      className={`bg-[#3f3f3f] px-[10px] text-[#999] text-[13px] rounded-[0.3rem] py-[0.25rem] ${
                        highlightedChapter === chapter.chapterId.split(" ")[1]
                          ? "bg-[#5f25a6] text-[#fff]" : ""
                      }`}
                    >
                      <IconContext.Provider value={{}}>
                        <FaGlasses className="inline-block mr-[0.5rem] mb-[2px]" />
                      </IconContext.Provider>
                      Read
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/3 max-lg:w-full max-lg:px-0">
          <div className="flex justify-start items-center pb-[20px]">
            <h3 className="text-[#fff] text-[24px]">Genres</h3>
          </div>
          <Category />
        </div>
      </div>
    </div>
  );
};

export default PageContent;

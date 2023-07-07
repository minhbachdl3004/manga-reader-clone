"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { poppins } from "@/components/navbar/Menu";
import { IoIosArrowDown } from "react-icons/io";
import { ImArrowRight2, ImArrowLeft2 } from "react-icons/im";
import { IconContext } from "react-icons";
import { useRouter } from "next/navigation";

interface Props {
  link: string;
  name: string;
  currentChapter: string;
  chapters: any;
  currentChapterId: string;
  previousChapterLink: string | undefined;
  nextChapterLink: string | undefined;
}

const Header = ({
  link,
  name,
  chapters,
  currentChapterId,
  currentChapter,
  previousChapterLink,
  nextChapterLink,
}: Props) => {
  const router = useRouter();
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

  const navigateNextChapter = () => {
    nextChapterLink ? router.push(`${link}/${nextChapterLink}`) : "";
  };

  const navigatePrevChapter = () => {
    previousChapterLink ? router.push(`${link}/${previousChapterLink}`) : "";
  };

  return (
    <div
      className={`w-full ${
        isNavbarVisible ? "fixed" : "absolute"
      } h-[70px] bg-[#222] z-[999] px-[20px] ${poppins.className}`}
    >
      <Link
        href="/"
        className="block h-[50px] my-[10px] mr-[40px] float-left max-md:w-[50px] max-md:overflow-hidden max-md:mr-0"
      >
        <Image
          src="https://mangareader.to/images/logo.png"
          alt=""
          width={160}
          height={50}
          className="max-md:absolute max-md:h-[50px] h-full w-auto float-left"
        />
      </Link>
      <div className="hr-line max-lg:hidden"></div>
      <Link
        href={link ? link : "/"}
        className="float-left h-[70px] w-[200px] relative hr-manga max-lg:hidden"
      >
        <h2 className="manga-name">{name}</h2>
      </Link>
      <div className="hr-navigation px-[50px] overflow-hidden max-md:absolute max-md:left-[80px] max-md:right-[120px] max-md:bg-[#222] max-md:w-full max-md:text-left max-sm:px-[20px]">
        <div
          className={`${
            showChapterList
              ? "bg-[#ffd702] text-[#111]"
              : "bg-[#333] text-[#fff]"
          } float-left leading-[30px] relative mr-[5px] py-[5px] px-[10px] flex justify-center items-center text-[13px] font-medium rounded-[4px] gap-[5px] max-sm:text-[12px]
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
          className={`bg-[#333] py-[11px] px-[10px] cursor-pointer rounded-[4px] mr-[5px] max-sm:px-[10px]`}
          onClick={navigatePrevChapter}
        >
          <IconContext.Provider value={{}}>
            <ImArrowLeft2 className="pb-[3px] font-bold text-[18px] hover:text-[#ffd702]" />
          </IconContext.Provider>
        </div>
        <div
          className={`bg-[#333] py-[11px] px-[10px] mr-[5px] cursor-pointer rounded-[4px] max-sm:px-[10px]`}
          onClick={navigateNextChapter}
        >
          <IconContext.Provider value={{}}>
            <ImArrowRight2 className="pb-[3px] font-bold text-[18px]  hover:text-[#ffd702]" />
          </IconContext.Provider>
        </div>
      </div>
      <div
        className="fixed top-[70px] inset-0 h-screen bg-opacity-100 transition-opacity"
        onClick={() => setShowChapterList(false)}
      ></div>
      <div
        className={`dropdown-menu dropdown-menu-model dropdown-menu-fixed overflow-auto pb-[10px] z-[9999] ${
          showChapterList ? "block" : "hidden"
        }`}
      >
        <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-[5px] px-[5px]">
          {chapters &&
            chapters.map((chapter: any, i: number) => (
              <Link
                href={`${link}/${chapter._id.toLowerCase().replace(" ", "-")}`}
                key={i}
                className="relative overflow-hidden"
              >
                <div
                  className={`px-[15px] pt-[8px] max-w-full h-[36px] rounded-[4px]  hover:text-[#c49bff]  text-[12px] text-ellipsis overflow-hidden whitespace-nowrap ${
                    currentChapterId === chapter._id
                      ? "bg-[#5f25a6] text-[#fff]"
                      : "bg-[#2f2f2f] text-[#ddd]"
                  } font-medium`}
                >
                  {chapter.chapterId}: {chapter.chapterName}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

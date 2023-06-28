import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { poppins } from "./Menu";

import { IoIosArrowBack } from "react-icons/io";
import "./styles.css";
import Link from "next/link";
import Categories from "@/components/common/category/Categories";
import { usePathname } from "next/navigation";

const types = [
  "Manga",
  "One-shot",
  "Doujinshi",
  "Light Novel",
  "Manhwa",
  "Manhua",
  "Comic",
];

const headingStyle = "w-full py-[10px] px-[15px] text-[13px] font-medium";
const title = [
  { title: "Completed", link: "completed" },
  { title: "A-Z List", link: "az-list" },
];

interface Props {
  onChange: (e: any) => void;
}

const MobileMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])
  return (
    <>
      <div
        className="p-0 text-[#fff] cursor-pointer absolute top-[35px] z-[4] w-[30px] h-[25px] text-center left-[10px] rounded-[3px] hidden max-md:inline-block"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-full h-full">
          <IconContext.Provider value={{}}>
            <GiHamburgerMenu className="w-[25px] h-[25px]" />
          </IconContext.Provider>
        </div>
      </div>
      <div className={`${isOpen ? "" : "hidden"}`}>
        <div
          className="fixed inset-0 h-screen bg-blur bg-opacity-100 transition-opacity z-[999]"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className={`sidebar_menu active ${poppins.className}`}>
          <button
            className="bg-[#3f3f3f] text-[#ddd] w-[40px] h-[40px] rounded-[50%] top-[10px] left-[15px] absolute p-[10px]"
            onClick={() => setIsOpen(false)}
          >
            <IconContext.Provider value={{}}>
              <IoIosArrowBack className="w-[16px] h-[16px] font-extrabold hover:text-[#c49bff]" />
            </IconContext.Provider>
          </button>
          <div className="absolute top-[60px] left-0 right-0 bottom-0 overflow-auto w-full flex flex-col">
            <Link
              className={`${headingStyle} border-bot hover:text-[#c49bff]`}
              href={"/"}
            >
              Home
            </Link>
            <div className="w-full flex flex-col border-bot">
              <div className={`${headingStyle}`}>Types</div>
              <div className="grid grid-cols-2 py-[10px] px-[15px] gap-[6px]">
                {types.map((type, i) => (
                  <Link
                    href={`/${type.toLowerCase().replaceAll(" ", "-")}`}
                    key={i}
                    className="float-left rounded-[6px] bg-[#3f3f3f] py-[5px] px-[8px] text-[12px] hover:text-[#c49bff]"
                  >
                    {type}
                  </Link>
                ))}
              </div>
            </div>
            {title.map((title) => (
              <Link
                className={`${headingStyle} border-bot hover:text-[#c49bff]`}
                href={`/${title.link}`}
                key={title.title}
              >
                {title.title}
              </Link>
            ))}
            <div className="flex flex-col w-full">
              <div className={`${headingStyle}`}>Genres</div>
              <div className="py-[10px] px-[5px]">
                <Categories styles="grid grid-cols-2" fontSize="text-[12px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

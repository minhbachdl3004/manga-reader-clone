"use client";
import React from "react";
import Image from "next/image";
import { Heading1 } from "@/components/common/heading/Header";
import Link from "next/link";
import { MdOutlineVisibility } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import Genres from "@/components/common/genres/Genres";
import { poppins } from "@/components/navbar/Menu";
import { MangaProps } from "utils/type";

const genres = ["Acion", "Comedy", "Drama"];

const moreInfo = {
  Type: "Manga",
  Status: "Publishing",
  Authors: "Nii",
  Magazines: "Magazine pocket",
  Score: "NA",
  Views: "87,123",
};

interface Props {
    manga: MangaProps;
}

const Header = ({ manga } : Props) => {
  return (
    <div className={`py-[60px] relative flex ${poppins.className}`}>
      <div
        className="min-w-[180px] h-[270px] relative rounded-[10px] mr-[30px]"
        style={{ border: "3px solid #fff" }}
      >
        <Image
          alt=""
          src={manga.poster}
          fill
          className="object-cover"
        ></Image>
      </div>
      <div className="flex w-full min-h-[300px] pt-[5px]">
        <div className="flex flex-col gap-[15px] w-[70%] mr-[20px]">
          <Heading1
            title={manga.name}
            link=""
            styles="text-[28px] text-[#fff] mb-[5px]"
            textColor="text-[#fff]"
          />
          <Heading1
            title={manga.otherName}
            link=""
            styles="text-[16px] mb-[10px]"
            textColor="text-[#999]"
          />
          <div className="flex gap-[10px] mb-[10px]">
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
              className="flex justify-center items-start p-[1rem] bg-[#3f3f3f] rounded-[0.4rem] cursor-pointer hover:text-[#effa59] font-black"
            >
              <BsBookmark />
            </Link>
          </div>
          <Genres genres={genres} type={1} styles="" textColor="" />
          <div className={`three-lines text-[#fff] max-w-[624px]`}>
            {manga.description}
          </div>
        </div>
        <div className="flex flex-col gap-[5px] px-[20px] ml-[20px] w-[50%]">
          {Object.entries(manga.moreInfo).map(([key, value]) => {
            return (
              <div key={key}>
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
  );
};

export default Header;

"use client";
import React from "react";
import Link from "next/link";

type buttonsProps = {
  title: string;
  bgColor: string;
};

export interface contentProps {
  subText: string;
  title: string;
  description: string;
  genres: string[];
  buttons: buttonsProps[];
}

const CardContent = ({
  subText,
  title,
  description,
  genres,
  buttons,
}: contentProps) => {
  return (
    <div
      className="max-w-[600px] w-full absolute top-[50%] left-[30px] z-[3] text-[#fff] px-[30px] max-xl:px-0 translate-y-[-50%] pointer-events-auto"
    >
      <div className="text-[18px] leading-[1.3rem] font-semibold mb-[5px] max-lg:hidden">
        {subText}
      </div>
      <div className="text-[32px] leading-[1.3] font-semibold mb-[15px] overflow-hidden max-lg:text-[20px]">
        <Link href="/">{title}</Link>
      </div>
      <div className="text-[1em] block font-normal mb-[30px] max-md:hidden max-xl:max-w-[460px]">
        <div className="mb-[1rem] text-[14px] three-lines">{description}</div>
        <div className="block mb-[10px] max-lg:hidden">
          {genres && genres.map((genre, i) => (
            <span
              key={i}
              className="inline-block mr-[6px] mb-[6px] py-[0.3rem] px-[0.5rem] leading-[1] rounded-[0.2rem] text-[11px]"
              style={{ border: "1px solid rgba(255,255,255,.5)" }}
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
      <div className="h-[40px] max-md:h-[35px] flex">
        {buttons.map((button, i) => (
          <div
            key={i}
            className={`text-[#111] font-medium text-[14px] leading-[40px] px-[20px] max-md:px-[15px] rounded-[4px] text-center h-full mr-[10px] ${button.bgColor} flex justify-center items-center max-md:h-[30px]`}
          >
            <Link href="/" className="max-md:text-[12px]">{button.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContent;

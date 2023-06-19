"use client";
import React from "react";
import Link from "next/link";

interface Props {
  link?: string;
  styles?: string;
  title: string;
}

export const Header = ({ styles, title }: Props) => {
  return (
    <div className={`${styles} mb-[15px] block w-full`}>
      <div className="">
        <h2 className="text-[#fff] text-[24px] leading-[40px] font-semibold p-0 m-0">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Heading1 = ({ styles, title }: Props) => {
  return (
    <h3
      className={`${styles}`}
      style={{
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
      }}
    >
      <Link
        href="/"
        className="text-[#ddd] relative w-full outline-none bg-transparent font-semibold hover:text-[#c49bff] overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {title}
      </Link>
    </h3>
  );
};

export const Heading2 = ({ link="", styles, title }: Props) => {
  return (
    <h3 className={`${styles}`}>
      <Link
        href={link}
        className="block overflow-hidden text-ellipsis whitespace-nowrap hover:text-[#c49bff]"
      >
        {title}
      </Link>
    </h3>
  );
};

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CardCover = () => {
  return (
    <Link
      href="/"
      className="top-0 left-0 bottom-0 right-0 overflow-hidden opacity-40"
    >
      <Image
        src={
          "https://img.mreadercdn.com/_m/500x800/100/71/55/715538afc362dcc957a6ec1fa307fc7a/715538afc362dcc957a6ec1fa307fc7a.jpg"
        }
        alt=""
        fill
        className="absolute object-cover w-[120%] h-[120%] top-[-10%] left-[-10%] opacity-100 filter"
        style={{ filter: "blur(8px)" }}
      ></Image>
    </Link>
  );
};

export default CardCover;

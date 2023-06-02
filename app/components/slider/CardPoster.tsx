"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CardPoster = () => {
  return (
    <div
      className="opacity-100 top-[-100px] scale-100 absolute left-[750px] w-[400px] box-border pointer-events-auto"
      style={{ transition: "all .2s ease 0s" }}
    >
      <Link
        href="/"
        className="inline-block border-[20px] border-solid border-[#fff] shadow-poster w-full pb-[148%] relative overflow-hidden bg-[#eee] outline-none box-border"
        style={{transform: "rotate(15deg)"}}
      >
        <Image
          src="https://img.mreadercdn.com/_m/500x800/100/71/55/715538afc362dcc957a6ec1fa307fc7a/715538afc362dcc957a6ec1fa307fc7a.jpg"
          alt=""
          fill
        ></Image>
      </Link>
    </div>
  );
};

export default CardPoster;

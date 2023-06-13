"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  cardPoster: string;
  isActive: boolean;
}

const CardPoster = ({ cardPoster, isActive }: Props) => {
  return (
    <div
      className={`slide opacity-100 top-[-100px] absolute left-[750px] w-[400px] pointer-events-auto 
      ${isActive ? "active" : ""}`}
      style={{ transform: `${isActive ? "scale(1)" : "scale(1.2)"}` }}
    >
      <Link
        href="/"
        className="inline-block w-full pb-[148%] overflow-hidden bg-[#eee] outline-none"
        style={{
          transform: "rotate(15deg)",
          transition: "all .5s ease 0s",
          WebkitTransition: "all .2s ease 0s",
          boxShadow: "0 30px 30px rgba(0, 0, 0, .2)",
          border: "20px solid #fff",
        }}
      >
        <Image
          src={cardPoster}
          alt=""
          fill
          className="absolute w-full h-full object-cover top-0 left-0 right-0 bottom-0eeeeeeeeeeeeeeeeeee"
          style={{
            transition: "all .5s ease 0s",
            verticalAlign: "middle",
            overflowClipMargin: "content-box",
            overflow: "clip",
            transform: "scale(1)",
          }}
        ></Image>
      </Link>
    </div>
  );
};

export default CardPoster;

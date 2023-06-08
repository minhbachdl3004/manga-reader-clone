"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  cardCover: string;
}

const CardCover = ({ cardCover }: Props) => {
  return (
    <Link
      href="/"
      className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden opacity-40"
    >
      <img
        src={cardCover}
        alt=""
        className="absolute object-cover w-[120%] h-[120%] top-[-10%] opacity-100"
        style={{ filter: "blur(8px)", WebkitTransition: "all .5s ease 0s" }}
      ></img>
    </Link>
  );
};

export default CardCover;

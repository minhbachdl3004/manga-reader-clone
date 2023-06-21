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
      className={`slide opacity-100 top-[-100px] absolute left-[750px] max-xl:left-[650px] w-[400px] max-xl:w-[350px] pointer-events-auto max-lg:left-[500px] max-md:left-[380px] max-md:w-[300px] max-md:top-[-90px] max-sm:w-[250px] max-sm:left-[280px]
      ${isActive ? "active" : ""}`}
    >
      <Link
        href="/"
        className="inline-block w-full pb-[148%] overflow-hidden bg-[#eee] outline-none"
        style={{
          transform: "rotate(15deg)",
          transition: "all .2s ease 0s",
          WebkitTransition: "all .2s ease 0s",
          boxShadow: "0 30px 30px rgba(0, 0, 0, .2)",
          border: "20px solid #fff",
          display: `${isActive ? "" : "none"}`
        }}
      >
        <Image
          src={cardPoster}
          alt=""
          fill
          className="absolute w-full h-full object-cover top-0 left-0 right-0 bottom-0"
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

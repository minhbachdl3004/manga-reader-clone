"use client";
import React from "react";
import Link from "next/link";
import { poppins } from "@/components/navbar/Menu";
import { AiOutlineFileText } from "react-icons/ai";

const arr = [1, 2, 3];
const genres = ["Comedy", "Sci-fi", "Shounen"];

const Detail = () => {
  return (
    <div className={`latest-manga-detail ${poppins.className}`}>
      <h3 className="text-[#ddd] max-h-[28px] text-[20px] leading-[1.4em] mb-[10px] font-semibold relative">
        <Link
          href="/"
          className="block overflow-hidden text-ellipsis whitespace-nowrap hover:text-[#c49bff]"
        >
          86 - Eighty-Six - Magical Girl Regina ☆ Lena ~Fight! Galactic Cruise
          Battleship San Magnolia~
        </Link>
      </h3>
      <div className="mb-[15px] block text-ellipsis whitespace-nowrap overflow-hidden">
        <span className="text-[13px] text-[#7f7e99]">
          {genres.map((genre, i) => (
            <Link
              key={i}
              href="/"
              className="text-[#ddd] hover:text-[#c49bff] font-medium"
            >
              {genre}
              {i !== genres.length - 1 ? ", " : ""}
            </Link>
          ))}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 pr-[10px]">
        {arr.map((arr, i) => (
          <div
            key={i}
            className="flex items-start text-left text-[0.9em] mb-[5px] px-[2px] py-[5px]"
            style={{ borderBottom: "1px dashed #464242" }}
          >
            <div className="float-left">
              <Link href="/" className="text-[#c49bff]">
                <AiOutlineFileText
                  style={{
                    display: "inline-block",
                    marginRight: ".5rem",
                    width: "16px",
                    height: "14px",
                    fontWeight: 900,
                  }}
                />
                Chap 3
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;

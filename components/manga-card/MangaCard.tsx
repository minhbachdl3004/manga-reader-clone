"use client";
import React, { useState } from "react";
import { MangaPoster1 } from "@/components/common/MangaPoster";
import Description from "./Description";
import { poppins } from "@/components/navbar/Menu";
import Tick from "./Tick";
import Link from "next/link";
import Image from "next/image";

interface Props {
  isDisplay: boolean;
  styles: string;
  children: React.ReactNode;
  name: string;
  poster: string;
  score: string;
  totalChapter: string;
  link?: string;
}

const MangaCard = ({
  link,
  styles,
  children,
  name,
  poster,
  score,
  totalChapter,
}: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div
      onMouseOver={() => setToggle(true)}
      onMouseOut={() => setToggle(false)}
    >
      <div className={` ${styles} ${poppins.className}`}>
        <Link
          href={link ? link : ""}
          className="absolute left-0 right-0 bottom-0 top-0 z-[98]"
        />
        <Tick />
        <Description
          link={link}
          name={name}
          score={score}
          totalChapter={totalChapter}
          toggle={toggle}
        />
        <Image
          alt=""
          fill
          className="absolute w-full h-full object-cover top-0 left-0 right-0 bottom-0"
          src={poster}
        />
      </div>
      {children}
    </div>
  );
};

export default MangaCard;

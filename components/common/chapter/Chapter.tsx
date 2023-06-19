"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineFileText } from "react-icons/ai";

interface Props {
  styles: string;
  chapterNumber: string;
}

const Chapter = ({ chapterNumber, styles }: Props) => {
  return (
    <div className={`${styles}`}>
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
        {chapterNumber}
      </Link>
    </div>
  );
};

export default Chapter;

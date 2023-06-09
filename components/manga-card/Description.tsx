"use client";
import React from "react";
import Link from "next/link";

import { AiTwotoneStar } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { poppins } from "@/components/navbar/Menu";
import { FaGlasses } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

const components = [
  {
    title: "9.14",
    icon: (
      <AiTwotoneStar
        style={{
          width: "16px",
          height: "14px",
          textAlign: "center",
          fontWeight: 900,
          display: "inline-block",
          lineHeight: "1",
          marginRight: "0.5rem",
        }}
      />
    ),
  },
  {
    title: "EN/FR/JA",
    icon: (
      <BsGlobe
        style={{
          width: "16px",
          height: "14px",
          textAlign: "center",
          fontWeight: 900,
          display: "inline-block",
          lineHeight: "1",
          marginRight: "0.5rem",
        }}
      />
    ),
  },
];

const btns = [
  {
    title: "Read Now",
    icon: (
      <FaGlasses
        style={{
          width: "16px",
          height: "14px",
          textAlign: "center",
          fontWeight: 900,
          display: "inline-block",
          lineHeight: "1",
          marginRight: "0.5rem",
        }}
      />
    ),
  },
  {
    title: "Info",
    icon: (
      <FiInfo
        style={{
          width: "16px",
          height: "14px",
          textAlign: "center",
          fontWeight: 900,
          display: "inline-block",
          lineHeight: "1",
          marginRight: "0.5rem",
        }}
      />
    ),
  },
];

interface Props {
  toggle: boolean;
}

const Description = ({ toggle }: Props) => {
  return (
    <div
      className={`bg-[#4f4f4f] absolute top-0 right-0 bottom-0 left-0 cursor-grab p-[10px] z-[99] text-[12px] leading-[1.2] overflow-hidden text-ellipsis max-lg:hidden trending-card ${
        toggle ? "opacity-1 active" : "opacity-0"
      }`}
    >
      <p className={`mb-[10px] whitespace-normal`}>
        <strong>One Piece</strong>
      </p>
      {components.map((component, i) => (
        <div className={`flex mb-[4px]`} key={i}>
          {component.icon}
          <span>{component.title}</span>
        </div>
      ))}
      <Link
        href="/"
        className={`flex mb-[4px] hover:text-[#c49bff] font-semibold`}
      >
        <AiOutlineFileText
          style={{
            width: "16px",
            height: "14px",
            textAlign: "center",
            fontWeight: 900,
            display: "inline-block",
            lineHeight: "1",
            marginRight: "0.5rem",
          }}
        />
        <span>Chap 100</span>
      </Link>
      <div className="absolute bottom-[10px] left-[10px] right-[10px]">
        {btns.map((btn, i) => (
          <Link
            key={i}
            href="/"
            className={`text-[12.6px] p-[0.4rem] mt-[0.5rem] ${
              i === 0 ? "bg-[#ffd702] text-[#111]" : "bg-[#2f2f2f] text-[#ddd]"
            } font-medium shadow-none outline-none border-none block w-full leading-[1.5] rounded-[0.2rem] text-center cursor-pointer`}
          >
            {btn.icon}
            {btn.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Description;
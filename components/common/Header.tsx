"use client";
import React from "react";

interface Props {
  title: string;
}

const Header = ({ title } : Props) => {
  return (
    <div className="mb-[15px] block w-full">
      <div className="">
        <h2 className="text-[#fff] text-[24px] leading-[40px] font-semibold p-0 m-0">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Header;

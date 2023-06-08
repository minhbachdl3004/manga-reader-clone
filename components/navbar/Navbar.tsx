"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import Search from "./Search";
import UserActions from "./UserActions";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#1f1f1f] text-[#ddd] h-[70px] pt-[10px] px-[20px] mt-[10px] mb-[40px]">
        <div className="relative max-w-[1400px] h-full box-border">
          <Link
            href="/"
            className="block h-[50px] my-[10px] mr-[40px] float-left"
          >
            <Image
              src="https://mangareader.to/images/logo.png"
              alt=""
              width={160}
              height={50}
              className="h-full w-auto float-left"
            />
          </Link>
          <Menu />
          <div className="float-right py-[15px] box-border text-[#ddd]">
            <Search />
            <UserActions />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

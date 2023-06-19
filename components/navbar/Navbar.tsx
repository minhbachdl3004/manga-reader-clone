"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import { MobileSearch, Search } from "./Search";
import UserActions from "./UserActions";

interface Props {
  styles?: string;
}

const Navbar = ({ styles }: Props) => {
  const [activeSearchBar, setActiveSearchBar] = useState<boolean>(false);

  const handleActiveSearchBar = () => {
    setActiveSearchBar(!activeSearchBar);
  };
  return (
    <>
      <div
        className={`${styles} w-full text-[#ddd] h-full px-[20px] mb-[40px]`}
      >
        <div className="max-w-[1400px] h-full relative">
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
          <MobileSearch onChange={handleActiveSearchBar} />
          <Menu />
          <div className="float-right py-[15px] text-[#ddd]">
            <Search active={activeSearchBar} />
            <UserActions />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

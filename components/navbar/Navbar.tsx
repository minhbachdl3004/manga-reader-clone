"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu, { poppins } from "./Menu";
import { MobileSearch, Search } from "./Search";
import UserActions from "./UserActions";
import MobileMenu from "./MobileMenu";
import Sidebar from "@/components/sidebar/Sidebar";

interface Props {
  styles?: string;
}

const Navbar = ({ styles="" }: Props) => {
  const [activeSearchBar, setActiveSearchBar] = useState<boolean>(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<boolean>(false);

  const handleActiveSearchBar = () => {
    setActiveSearchBar(!activeSearchBar);
  };

  const handleActiveMobileMenu = () => {
    setActiveMobileMenu(!activeMobileMenu);
  };
  return (
    <>
      <div
        className={`${styles} w-full max-md:pt-0 text-[#ddd] h-full px-[20px] max-md:px-[10px] max-md:mb-0 mb-[40px] navbar-container ${poppins.className}`}
      >
        <div className="max-w-[1400px] h-full">
          <MobileMenu onChange={handleActiveMobileMenu} />
          <Link
            href="/"
            className="block h-[50px] my-[10px] mr-[40px] float-left max-md:ml-[40px]"
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
        <Sidebar onChange={handleActiveMobileMenu} isActive={activeMobileMenu} />
      </div>
    </>
  );
};

export default Navbar;

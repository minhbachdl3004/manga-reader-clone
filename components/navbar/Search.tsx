import React from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { poppins } from "./Menu";

interface Props {
  active?: boolean;
  onChange?: (e: any) => void;
}

export const Search = ({ active }: Props) => {
  return (
    <div
      className={`search-bar ${active ? "active-search" : ""}`}
    >
      <div className="relative box-border">
        <form action="/search" className="box-border text-[#ddd]">
          <Link
            href="/filter"
            className="h-[26px] cursor-pointer leading-[26px] text-[11px] bg-[#e9daff] text-[#5f25a6] px-[6px] rounded-[6px] absolute left-[7px] top-[7px] z-3 hover:bg-[#5f25a6] hover:text-[#fff]"
          >
            FILTER
          </Link>
          <input
            type="text"
            className={`relative w-full h-[40px] text-[#111] pr-[40px] pl-[60px] text-[13px] font-normal bg-[#fff] rounded-[8px] border-none shadow-input outline-none ${poppins.className} }`}
            placeholder="Search manga..."
          />
          <button
            type="submit"
            className="w-[40px] h-[40px] px-[10px] leading-[40px] inline-block text-[#111] text-center absolute top-0 right-0 z-3 cursor-pointer font-black"
          >
            <AiOutlineSearch
              style={{ fontSize: "20px", fontWeight: "900", color: "#111" }}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export const MobileSearch = ({ onChange }: Props) => {
  return (
    <div
      className="left-auto hidden right-[40px] top-[20px] max-xl:inline-block p-0 text-[#fff] cursor-pointer absolute z-[4] w-[26px] h-[26px] text-center rounded-[3px] font-extrabold"
      onClick={onChange}
    >
      <AiOutlineSearch
        style={{ width: "100%", height: "100%", fontWeight: "900" }}
      />
    </div>
  );
};

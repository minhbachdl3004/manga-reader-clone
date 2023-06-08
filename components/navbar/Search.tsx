import React from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { poppins } from "./Menu";

const Search = () => {
  return (
    <div className="w-[320px] m-0 mr-[15px] float-left box-border text-[#ddd]">
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

export default Search;

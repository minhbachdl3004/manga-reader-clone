import Link from "next/link";
import React from "react";

const liStyles = "text-[#aaa] leading-[1.4em] mb-[3px]";
const dotStyles =
  "w-[4px] h-[4px] rounded-[50%] bg-[#666] inline-block my-[3px] mx-[6px]";

interface Props {
  name: string;
  type: string;
  searchPage?: boolean;
}

const BreadCrumb = ({ searchPage = false, name, type }: Props) => {
  return (
    <div className="mb-[25px] overflow-hidden relative z-[3]">
      <div className="max-w-[1400px] w-full px-[20px]">
        <nav>
          <ol className="flex">
            <li className={`${liStyles}`}>
              <Link href={"/"}>Home</Link>
            </li>
            <li className={`${liStyles}`}>
              <span className={`${dotStyles}`}></span>
              {type}
            </li>
            {searchPage ? null : (
              <li className={`${liStyles}`}>
                <span className={`${dotStyles}`}></span>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </li>
            )}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default BreadCrumb;

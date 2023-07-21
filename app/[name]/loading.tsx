import CategorySkeletonLoading from "@/components/common/CategoryLoad";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const skeletonStyles =
  "bg-gray-300 dark:bg-gray-500 animate-pulse rounded-[12px]";
const arr = [1, 2, 3];

const Loading = () => {
  return (
    <div>
      <div className={`w-full bg-[#2f2f2f] px-[20px]`}>
        <div
          className={`py-[60px] relative flex max-lg:w-full max-lg:flex-col`}
        >
          <div className="min-w-[180px] h-[270px] relative rounded-[10px] mr-[30px] max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:right-auto max-lg:z-[9] max-lg:mx-auto max-lg:mb-[15px] max-xl:w-[140px]">
            <div className={`${skeletonStyles} w-full h-full`}></div>
          </div>
          <div className="flex w-full min-h-[300px] pt-[5px] max-lg:text-center max-lg:flex-col max-lg:items-center">
            <div className="flex flex-col gap-[15px] w-[70%] max-lg:w-full mr-[20px] max-lg:mr-0">
              <div className="flex justify-center items-center w-full">
                <div
                  className={`${skeletonStyles} w-full h-[24px] max-lg:w-[70%]`}></div>
              </div>
              <div className="flex justify-center items-center w-full">
                <div
                  className={`${skeletonStyles} w-full h-[24px] max-lg:w-[70%]`}></div>
              </div>
              <div className="flex gap-[10px] max-lg:justify-center max-lg:items-center mb-[10px] h-[42px]">
                <div className={`${skeletonStyles} w-[138px] h-full`}></div>
                <div className={`${skeletonStyles} w-[52px] h-full`}></div>
              </div>
              <div className="flex w-full h-[36px]">
                {arr.map((i) => (
                  <div
                    key={i}
                    className={`${skeletonStyles} w-[50px] h-[25px] mr-[5px]`}
                  ></div>
                ))}
              </div>
              <div className="flex flex-col gap-[5px] w-full h-[72px]">
                {arr.map((i) => (
                  <div
                    key={i}
                    className={`${skeletonStyles} w-full h-[15px] max-lg:w-[50%]`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[15px] max-lg:justify-self-start px-[20px] ml-[20px] w-[50%] max-lg:w-full max-lg:ml-0 max-lg:px-0 max-lg:my-[20px]">
              {arr.map((i) => (
                <div
                  key={i}
                  className={`${skeletonStyles} w-[70%] h-[15px] max-lg:w-[30%]`}
                ></div>
              ))}
            </div>
            <div className={``}></div>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-[15px] relative overflow-hidden px-[15px] py-[10px] mt-[20px] mb-[40px] max-lg:flex-col">
        <div className="w-2/3 flex flex-col max-lg:w-full max-lg:pr-0 pr-[20px]">
          <div className="block w-full">
            <div className="" style={{ borderBottom: "5px solid #5f25a6" }}>
              <Link
                href="#list-chapter"
                className="bg-[#5f25a6] text-[#fff] border-none px-[20px] leading-[45px] font-medium h-full py-[18px] overflow-hidden"
              >
                List Chapter
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div
              className="bg-[#3f3f3f] w-full text-[#ddd] p-[10px] z-[100] relative max-lg:flex max-lg:flex-col max-lg:gap-[10px]"
              style={{ boxShadow: "0 10px 10px rgba(0, 0, 0, .05" }}
            >
              <div className="max-lg:w-full relative float-left py-[6px] pl-[5px] text-[14px] text-[#ddd]">
                Language: EN
              </div>
              <div className="max-lg:w-full float-right w-[200px] relative">
                <form action="" className="flex justify-center items-center">
                  <AiOutlineSearch
                    style={{
                      position: "absolute",
                      left: 10,
                      width: "14px",
                      height: "!4px",
                    }}
                  />
                  <input
                    type="text"
                    className="bg-[#5f5f5f] w-full pl-[35px] rounded-[4px] outline-none border-none p-[6px] text-[14px]"
                    placeholder="Number of chapter"
                  />
                </form>
              </div>
            </div>
            <div className="max-h-[490px] m-0 overflow-x-hidden overflow-y-auto">
              {arr.map((i) => (
                <div
                  key={i}
                  className="block w-full mr-[1px] border-bottom-black"
                >
                  <div
                    className={`bg-[#2f2f2f] text-[#ddd] px-[15px] py-[10px] relative flex justify-between `}
                  >
                    <div
                      className={`${skeletonStyles} w-[150px] h-[25px]`}
                    ></div>
                    <div
                      className={`${skeletonStyles} w-[80px] h-[25px]`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/3 max-lg:w-full max-lg:px-0">
          <CategorySkeletonLoading />
        </div>
      </div>
    </div>
  );
};

export default Loading;

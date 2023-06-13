import React from "react";

const arr = [1, 2, 3, 4, 5, 6];
const skeletonContent =
  "h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[206px] mb-2.5";
const Loading = () => {
  return (
    <>
      <div className="flex">
        {arr.map((i) => (
          <div key={i} className="flex flex-col">
            <div
              className={`w-[206px] h-[304px] mr-[15px] flex-shrink-0 relative bg-gray-200 dark:bg-gray-600 animate-pulse`}
            ></div>
            <div className="w-full h-full mt-[10px]">
              <div className={`${skeletonContent}`}></div>
              <div className={`${skeletonContent}`}></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Loading;

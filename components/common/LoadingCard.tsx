import React from "react";

const arr = [1, 2, 3];

const skeletonStyles = "bg-gray-200 dark:bg-gray-700 animate-pulse";

const LoadingCard = () => {
  return (
    <div
      className={`w-full h-[228px] relative rounded-[0.75em] float-left mx-[7px] my-[6px] bg-gray-300 dark:bg-gray-500`}
    >
      <div className="p-[1em]">
        <div
          className={`absolute top-[1em] left-[1em] w-[140px] h-[200px] pb-[200px]  ${skeletonStyles}`}
        ></div>
        <div className="latest-manga-detail">
          <div
            className={`w-full h-[15px] mb-[10px] ${skeletonStyles} rounded-full`}
          ></div>
          <div
            className={`w-[80%] h-[15px] mb-[15px] ${skeletonStyles} rounded-full`}
          ></div>
          <div className="absolute flex flex-col gap-[2px] bottom-0 left-0 right-0 pr-[10px]">
            {arr.map((item, i) => (
              <div
                className={`w-[120px] h-[15px] mb-[10px] ${skeletonStyles} rounded-full`}
                key={i}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;

import CategorySkeletonLoading from "@/components/common/CategoryLoad";
import LoadingCard from "@/components/common/LoadingCard";
import React from "react";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const Loading = () => {
  return (
    <div>
      <div className="w-[150px] h-[22px] animate-pulse rounded-full bg-gray-300 dark:bg-gray-500 mx-[20px] mb-[20px]"></div>
      <div className="flex gap-[14px] max-w-[1400px] px-[20px] pb-[50px]">
        <div className="max-w-[874px]">
          <div className="float-left text-3xl pb-[20px] w-full h-[20px] animate-pulse bg-gray-300 dark:bg-gray-500 mb-[10px] rounded-full"></div>
          <div className="list-items mx-[-7px] max-md:flex max-md:flex-col my-0">
            {arr.map((item, i) => (
              <LoadingCard key={i} />
            ))}
          </div>
        </div>
        <CategorySkeletonLoading />
      </div>
    </div>
  );
};

export default Loading;

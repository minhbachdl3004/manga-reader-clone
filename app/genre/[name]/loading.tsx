import CategorySkeletonLoading from "@/components/common/CategoryLoad";
import LoadingCard from "@/components/common/LoadingCard";
import React from "react";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const Loading = () => {
  return (
    <div className="py-[20px]">
      <div className="flex max-xl:flex-col max-md:px-0 gap-[14px] max-w-[1400px] px-[20px] pb-[50px]">
        <div className="w-full max-md:w-full max-md:px-[10px]">
          <div className="w-[150px] h-[22px] animate-pulse rounded-full bg-gray-300 dark:bg-gray-500 mb-[20px]"></div>
          <div className="float-left text-3xl pb-[20px] w-2/3 h-[20px] animate-pulse bg-gray-300 dark:bg-gray-500 mb-[10px] rounded-full"></div>
          <div className="list-items mx-[-7px] max-md:grid-cols-2 max-sm:grid-cols-1 my-0">
            {arr.map((item, i) => (
              <LoadingCard key={i} />
            ))}
          </div>
        </div>
        <div className="px-[20px] max-md:px-[10px]">
          <CategorySkeletonLoading />
        </div>
      </div>
    </div>
  );
};

export default Loading;

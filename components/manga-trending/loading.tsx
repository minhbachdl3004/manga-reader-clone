import React from "react";

const arr = [1, 2, 3, 4, 5, 6];

const Loading = () => {
  return (
    <div className="flex my-[40px]">
      {arr.map((i) => (
        <div
          key={i}
          className={`w-[202px] h-[232px] mr-[20px] flex-shrink-0 relative bg-gray-200 dark:bg-gray-600 animate-pulse`}
        ></div>
      ))}
    </div>
  );
};

export default Loading;

import React from "react";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const Loading = () => {
  return (
    <div>
      <p className="text-3xl">Manga</p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        {arr.map((i) => (
          <li key={i}>
            <span
              className="inline-block h-5 animate-pulse w-12 bg-red-400"
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: "1s",
              }}
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Loading;

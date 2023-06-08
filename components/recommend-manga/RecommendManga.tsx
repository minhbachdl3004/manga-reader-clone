"use client";

import React from "react";
import Header from "@/components/common/Header";
import RecommendList from "./RecommendList";

const RecommendManga = () => {
  return (
    <div className="mb-[20px] w-full overflow-hidden">
      <div className="px-[20px] max-w-[1400px] w-full mx-auto">
        <section className="mb-[20px] block relative">
          <Header title="Recommended" />
          <RecommendList />
        </section>
      </div>
    </div>
  );
};

export default RecommendManga;

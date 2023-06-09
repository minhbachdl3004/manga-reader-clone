"use client"
import React from "react";
import { Header } from "@/components/common/heading/Header";
import TrendingList from "./TrendingList";

const MangaTrending = () => {
  return (
    <div
      className="bg-[#2c2c2c] py-[20px] mb-[30px] text-[#ddd]"
      style={{ background: "linear-gradient(0deg,#2c2c2c 0,#1f1f1f 100%)" }}
    >
      <div className="max-w-[1400px] w-full px-[20px]">
        <section className="block relative">
          <Header title="Trending" />
          <TrendingList />
        </section>
      </div>
    </div>
  );
};

export default MangaTrending;

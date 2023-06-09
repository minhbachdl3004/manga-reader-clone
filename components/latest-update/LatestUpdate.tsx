"use client";
import React from "react";
import { Header } from "@/components/common/heading/Header";
import  { MangaPoster2 } from "@/components/common/MangaPoster";
import Tick from "@/components/manga-card/Tick";
import Detail from "./Detail";

const arr = [1, 2, 3, 4, 5, 6];

const LatestUpdate = () => {
  return (
    <div className="w-full float-left mb-[40px] overflow-hidden">
      <section className="block mb-[40px] relative">
        <Header title="Latest Updates" />
        <div className="my-0 mx-[-7px] list-items">
          {arr.map((arr, i) => (
            <div
              className="p-[1em] mb-[12px] rounded-[0.75em] bg-[#2f2f2f] float-left mx-[7px] relative"
              style={{ width: "calc(100% - 10px)" }}
              key={i}
            >
              <MangaPoster2 styles="top-[1em] left-[1em] w-[140px] absolute h-auto pb-[200px]">
                <Tick isDisplay={true} />
              </MangaPoster2>
              <Detail title="Blue Lock" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LatestUpdate;

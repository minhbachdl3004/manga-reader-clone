"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from "./SliderCard";

const Slider = () => {
  return (
    <div className="bg-[#1f1f1f] text-[#ddd] mt-[-165px] pt-[165px] box-border">
      <div className="px-[30px] w-full max-w-[1400px] m-auto">
        <div className="bg-[#20152d] overflow-hidden z-[1] relative block w-full pb-[33%] box-border">
          <div className="absolute top-0 left-0 w-full h-full right-0 bottom-0">
            <SliderCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

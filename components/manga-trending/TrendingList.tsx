"use client";

import React, { useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MangaCard from "@/components/manga-card/MangaCard";
import Number from "@/components/manga-trending/Number";

const TrendingList = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="block_area-content">
      <div className="relative mb-[10px] px-0 h-0 opacity-0 show">
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          slidesPerView={"auto"}
          // autoplay={{ delay: 3000 }}
          className="relative my-0 w-full overflow-hidden z-[1]"
        >
          {arr.map((item, i) => (
            <SwiperSlide
              key={i}
              className="w-[201.833px] max-w-[201.833px] mr-[20px] flex-shrink-0 h-full relative"
            >
              <div className="w-full h-auto pb-[115%] relative inline-block overflow-hidden">
                <MangaCard
                  isDisplay={false}
                  styles="inline-block absolute w-auto left-[40px] right-0 top-0 bottom-0 h-auto overflow-hidden bg-[#eee]"
                >
                  <Number />
                </MangaCard>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingList;

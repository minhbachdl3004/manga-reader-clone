"use client";

import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MangaCard from "@/components/manga-card/MangaCard";
import Detail from "@/components/common/detail/Detail";
import { Heading1 } from "@/components/common/heading/Header";
import Genres from "@/components/common/genres/Genres";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const RecommendList = () => {
  return (
    <div>
      <div className="relative">
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          slidesPerView={"auto"}
          // autoplay={{ delay: 3000 }}
          className="relative my-0 mx-auto w-full overflow-hidden z-[1]"
        >
          {arr.map((item, i) => (
            <SwiperSlide
              key={i}
              className="w-[206px] max-w-[206px] mr-[15px] flex-shrink-0 h-full relative"
            >
              <div>
                <MangaCard
                  isDisplay={true}
                  styles="w-full pb-[148%] relative overflow-hidden bg-[#eee]"
                >
                  <Detail styles="py-[10px] px-0 overflow-hidden">
                    <Heading1
                      styles="text-[1em] leading-[1.4] overflow-hidden font-semibold mb-[0.5rem]"
                      title="Blue Lock"
                    />
                    <Genres styles="block text-ellipsis whitespace-nowrap overflow-hidden" textColor="text-[#999]" />
                  </Detail>
                </MangaCard>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendList;

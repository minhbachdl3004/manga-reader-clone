"use client";
import React, { useState } from "react";
import SwiperCard from "./SwiperCard";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const items = [
  {
    title: "Jiangshi X",
    description: `A silent darkness threatens a thousand years of peace... Who can stand up to great evil...and Jiangshi?! Young warriors, become the light that defeats despair! Welcome to this new Chinese battle...`,
    genres: ["Action", "Fantasy", "Historical", "Shounen"],
    img: "https://img.mreadercdn.com/_m/500x800/100/82/8d/828d715c57ec84669fb81fe599d53e1b/828d715c57ec84669fb81fe599d53e1b.jpg",
  },
  {
    title: "Spy x Family",
    description: `For the agent known as "Twilight," no order is too tall if it is for the sake of peace. Operating as Westalis' master spy, Twilight works tirelessly to prevent extremists from sparking a war with...`,
    genres: ["Action", "Comedy", "Shounen"],
    img: "https://img.mreadercdn.com/_m/500x800/100/0c/64/0c64e3287e85df82f6add8b09ff38714/0c64e3287e85df82f6add8b09ff38714.jpg",
  },
  {
    title: "My Hero Academy",
    description: `One day, a four-year-old boy came to a sudden realization: the world is not fair. Eighty percent of the world's population wield special abilities, known as "quirks," which have given many the power...`,
    genres: ["Action", "Comedy", "School", "Shounen", "Super Power"],
    img: "https://img.mreadercdn.com/_m/500x800/100/26/2c/262c4d2c261abf52d97f8f37ce4b256f/262c4d2c261abf52d97f8f37ce4b256f.jpg",
  },
];

const HeroSlide = () => {
  return (
    <div className="bg-[#1f1f1f] text-[#ddd] mt-[-165px] pt-[165px]">
      <div className="px-[20px] w-full max-w-[1400px] m-auto">
        <div className="bg-[#20152d] overflow-hidden z-[1] relative block pr-0 w-full pb-[33%]">
          <Swiper
            modules={[Autoplay]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            // autoplay={{ delay: 3000 }}
            className="top-0 left-0 w-full h-full right-0 bottom-0 flex z-[1] box-content"
            style={{ position: "absolute" }}
          >
            {items.map((item, i) => (
              <SwiperSlide
                key={i}
                className={`w-[1311px] h-full opacity-100 duration-0 relative bg-[#20152d] flex-shrink-0`}
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transformStyle: "preserve-3d",
                }}
              >
                {({ isActive }) => (
                  <SwiperCard
                    isActive={isActive}
                    title={item.title}
                    cardCover={item.img}
                    cardPoster={item.img}
                    description={item.description}
                    genres={item.genres}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;

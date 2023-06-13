import React, { useState } from "react";
import SwiperCard from "./SwiperCard";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import fetcher from "configs/fetcherConfig";
import useSWR from "swr";
import { mangaProps } from "utils/type";

interface Props {
  mangas: mangaProps;
  isLoading: any;
  isError: any;
}

const GetPosterManga = () => {
  const { data, error, isLoading } = useSWR("manga/poster", fetcher);

  return {
    mangas: data,
    isLoading,
    isError: error,
  };
};

const HeroSlide = () => {
  const { mangas, isLoading, isError }: Props = GetPosterManga();
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
            {mangas &&
              mangas.mangas.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className={`w-[1311px] h-full opacity-100 duration-0 relative bg-[#20152d] flex-shrink-0`}
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {({ isActive }) => (
                    <SwiperCard
                      totalChapter={item?.chapters.length}
                      isActive={isActive}
                      title={item?.name}
                      cardCover={item?.poster}
                      cardPoster={item?.poster}
                      description={item?.description}
                      genres={item?.genres}
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

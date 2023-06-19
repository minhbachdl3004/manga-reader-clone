"use client";
import React, { useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MangaCard from "@/components/manga-card/MangaCard";
import Number from "@/components/manga-trending/Number";
import { mangaProps } from "utils/type";
import fetcher from "configs/fetcherConfig";
import useSWR from "swr";
import Loading from "./loading";

interface Props {
  mangas: mangaProps;
  isLoading: any;
  isError: any;
}

const GetTrendingManga = () => {
  const { data, error, isLoading } = useSWR("manga/trending", fetcher);

  return {
    mangas: data,
    isLoading,
    isError: error,
  };
};

const TrendingList = () => {
  const { mangas, isLoading, isError }: Props = GetTrendingManga();
  return (
    <div className="block_area-content">
      <div className="relative mb-[10px] px-0 h-0 opacity-0 show">
        {isLoading ? (
          <Loading />
        ) : (
          <Swiper
            modules={[Autoplay]}
            grabCursor={true}
            slidesPerView={"auto"}
            // autoplay={{ delay: 3000 }}
            className="relative my-0 w-full overflow-hidden z-[1]"
          >
            <>
              {mangas.mangas.map((manga, i) => (
                  <SwiperSlide
                    key={manga._id}
                    className="w-[201.833px] max-w-[201.833px] mr-[20px] flex-shrink-0 h-full relative"
                  >
                    <div className="w-full h-auto pb-[115%] relative inline-block overflow-hidden">
                      <MangaCard
                        name={manga.name}
                        poster={manga.poster}
                        score={manga.moreInfo.Score}
                        totalChapter={manga.totalChapter.toString()}
                        isDisplay={false}
                        styles="inline-block absolute w-auto left-[40px] right-0 top-0 bottom-0 h-auto overflow-hidden bg-[#eee]"
                      >
                        <Number name={manga.name} rank={(i + 1).toString()} />
                      </MangaCard>
                    </div>
                  </SwiperSlide>
                ))}
              )
            </>
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default TrendingList;

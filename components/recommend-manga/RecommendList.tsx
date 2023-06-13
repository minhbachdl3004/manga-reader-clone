"use client";

import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MangaCard from "@/components/manga-card/MangaCard";
import Detail from "@/components/common/detail/Detail";
import { Heading1 } from "@/components/common/heading/Header";
import Genres from "@/components/common/genres/Genres";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

import fetcher from "configs/fetcherConfig";
import useSWR from "swr";
import Loading from "app/loading";
import { mangaProps } from "utils/type";

interface Props {
  mangas: mangaProps;
  isLoading: any;
  isError: any;
}

const GetRecommendManga = () => {
  const { data, error, isLoading } = useSWR("manga/recommend", fetcher);

  return {
    mangas: data,
    isLoading,
    isError: error,
  };
};

const RecommendList = () => {
  const { mangas, isLoading, isError }: Props = GetRecommendManga();
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
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {mangas.mangas.map((manga, i) => (
                <SwiperSlide
                  key={manga._id}
                  className="w-[206px] max-w-[206px] mr-[15px] flex-shrink-0 h-full relative"
                >
                  <div>
                    <MangaCard
                      name={manga.name}
                      poster={manga.poster}
                      isDisplay={true}
                      styles="w-full pb-[148%] relative overflow-hidden bg-[#eee]"
                    >
                      <Detail styles="py-[10px] px-0 overflow-hidden">
                        <Heading1
                          styles="text-[1em] leading-[1.4] overflow-hidden font-semibold mb-[0.5rem]"
                          title={manga.name}
                        />
                        <Genres
                          styles="block text-ellipsis whitespace-nowrap overflow-hidden"
                          textColor="text-[#999]"
                          genres={manga.genres}
                        />
                      </Detail>
                    </MangaCard>
                  </div>
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendList;

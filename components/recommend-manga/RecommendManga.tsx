"use client";
import React from "react";
import { Header, Heading2 } from "@/components/common/heading/Header";
import { PromiseProps } from "utils/type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import MangaCard from "@/components/manga-card/MangaCard";
import Detail from "@/components/common/detail/Detail";
import Genres from "@/components/common/genres/Genres";
import { linkManga } from "app/data/dataFetching";

const RecommendManga = async ({ promise }: PromiseProps) => {
  const manga = await promise;
  return (
    <div className="mb-[20px] w-full overflow-hidden">
      <div className="px-[20px] max-xl:px-0 max-w-[1400px] w-full mx-auto">
        <section className="mb-[20px] block relative">
          <Header title="Recommended" />
          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              grabCursor={true}
              slidesPerView={"auto"}
              // autoplay={{ delay: 3000 }}
              className="relative my-0 mx-auto w-full overflow-hidden z-[1]"
            >
              <>
                {manga.mangas.map((manga, i) => (
                  <SwiperSlide
                    key={manga._id}
                    className="w-[206px] max-w-[206px] mr-[15px] flex-shrink-0 h-full relative"
                  >
                    <div>
                      <MangaCard
                        link={linkManga(manga.name, manga.mangaId)}
                        name={manga.name}
                        poster={manga.poster}
                        score={manga.moreInfo.Score}
                        totalChapter={manga.totalChapter.toString()}
                        isDisplay={true}
                        styles="w-full pb-[148%] relative overflow-hidden bg-[#eee]"
                      >
                        <Detail styles="py-[10px] px-0 overflow-hidden">
                          <Heading2
                            styles="relative max-w-[206px] leading-[1.4] overflow-hidden font-semibold mb-[0.5rem] text-[#ddd] text-[14px]"
                            title={manga.name}
                            link={manga.name.toLowerCase().replaceAll(" ", "-") + `-${manga.mangaId}`}
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
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecommendManga;

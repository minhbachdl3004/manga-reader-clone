"use client";
import React from "react";
import { Header } from "@/components/common/heading/Header";
import { PromiseProps, mangaProps } from "utils/type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import MangaCard from "@/components/manga-card/MangaCard";
import { linkManga } from "app/data/dataFetching";
import Ranking from "./Number";

const MangaTrending = async ({ promise }: PromiseProps) => {
  const manga = await promise;
  
  return (
    <div
      className="bg-[#2c2c2c] py-[20px] mb-[30px] text-[#ddd]"
      style={{ background: "linear-gradient(0deg,#2c2c2c 0,#1f1f1f 100%)" }}
    >
      <div className="max-w-[1400px] w-full px-[20px] max-xl:px-0">
        <section className="block relative">
          <Header styles="max-xl:px-[10px]" title="Trending" />
          <div className="block_area-content">
            <div className="relative mb-[10px] px-0 h-0 opacity-0 show">
              <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                slidesPerView={"auto"}
                // autoplay={{ delay: 3000 }}
                className="relative my-0 w-full overflow-hidden z-[1] max-xl:px-[10px]"
              >
                <>
                  {manga.mangas.map((manga, i) => (
                    <SwiperSlide
                      key={manga._id}
                      className="w-[201.833px] max-w-[201.833px] mr-[20px] flex-shrink-0 h-full relative"
                    >
                      <div className="w-full h-auto pb-[115%] relative inline-block overflow-hidden">
                        <MangaCard
                          name={manga.name}
                          poster={manga.poster}
                          score={manga.moreInfo.Score}
                          link={linkManga(manga.name, manga.mangaId)}
                          totalChapter={manga.totalChapter.toString()}
                          isDisplay={false}
                          styles="inline-block absolute w-auto left-[40px] right-0 top-0 bottom-0 h-auto overflow-hidden bg-[#eee]"
                        >
                          <Ranking name={manga.name} rank={(i + 1).toString()} />
                        </MangaCard>
                      </div>
                    </SwiperSlide>
                  ))}
                  )
                </>
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MangaTrending;

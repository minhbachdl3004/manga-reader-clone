"use client";
import React from "react";
import SwiperCard from "./SwiperCard";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import fetcher from "configs/fetcherConfig";
import { mangaProps } from "utils/type";
import Loading from "./loading";
import CardCover from "./CardCover";
import CardPoster from "./CardPoster";
import CardContent from "./CardContent";
import { poppins } from "@/components/navbar/Menu";

const buttons = [
  { title: "Read Now", bgColor: "bg-[#ffd702]" },
  { title: "View Info", bgColor: "bg-[#fff]" },
];

const HeroSlide = ({ mangas }: any) => {
  // const { mangas, isLoading, isError }: Props = GetMangaPoster();

  return (
    <>
      <div className="bg-[#1f1f1f] text-[#ddd] mt-[-165px] pt-[165px]">
        <div className="px-[20px] max-xl:px-0 w-full max-w-[1400px] m-auto">
          <div className="bg-[#20152d] max-md:h-[200px] overflow-hidden z-[1] relative block pr-0 w-full pb-[33%]">
            {!mangas ? (
              <Loading />
            ) : (
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
                {mangas.mangas.map((manga: any) => (
                  <SwiperSlide
                    key={manga._id}
                    className={`w-[1311px] h-full opacity-100 duration-0 relative bg-[#20152d] flex-shrink-0`}
                    style={{
                      transform: "translate3d(0px, 0px, 0px)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {({ isActive }) => (
                      <div
                        className={`w-full h-full absolute top-0 left-0 right-0 bottom-0 ${poppins.className}`}
                      >
                        <CardCover cardCover={manga.poster} />
                        <CardPoster
                          cardPoster={manga.poster}
                          isActive={isActive}
                        />
                        <CardContent
                          subText={`Chapter: ${manga.totalChapter} [EN]`}
                          title={manga.name}
                          description={manga.description}
                          genres={manga.genres}
                          buttons={buttons}
                        />
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlide;

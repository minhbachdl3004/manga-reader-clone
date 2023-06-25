"use client";
import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { poppins } from "@/components/navbar/Menu";
import Link from "next/link";
import Image from "next/image";
import { linkManga } from "app/data/dataFetching";



const buttons = [
  { title: "Read Now", bgColor: "bg-[#ffd702]" },
  { title: "View Info", bgColor: "bg-[#fff]" },
];

const HeroSlide = ({ mangas }: any) => {
  return (
    <>
      <div className="bg-[#1f1f1f] text-[#ddd] mt-[-165px] pt-[165px]">
        <div className="px-[20px] max-xl:px-0 w-full max-w-[1400px] m-auto">
          <div className="bg-[#20152d] max-md:h-[200px] overflow-hidden z-[1] relative block pr-0 w-full pb-[33%]">
            <Swiper
              modules={[Autoplay]}
              grabCursor={true}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              scrollbar={{ draggable: true }}
              // autoplay={{ delay: 3000 }}
              className="top-0 left-0 w-full h-full right-0 bottom-0 flex z-[1] box-content"
              style={{ position: "absolute" }}
            >
              {mangas.mangas.map((manga: any) => (
                <SwiperSlide
                  key={manga._id}
                  className={`w-[1311px] h-full opacity-100 duration-0 relative bg-[#20152d] flex-shrink-0`}
                >
                  {({ isActive }) => (
                    <div
                      className={`w-full h-full absolute top-0 left-0 right-0 bottom-0 ${poppins.className}`}
                    >
                      <Link
                        href={linkManga(manga.name, manga.mangaId)}
                        className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden opacity-40"
                      >
                        <Image
                          src={manga.poster}
                          alt=""
                          width={120}
                          height={120}
                          className="absolute object-cover w-[120%] h-[120%] top-[-10%] opacity-100"
                          style={{
                            filter: "blur(8px)",
                            WebkitTransition: "all .5s ease 0s",
                          }}
                        ></Image>
                      </Link>
                      <div
                        className={`slide opacity-100 top-[-100px] absolute left-[750px] max-xl:left-[650px] w-[400px] max-xl:w-[350px] pointer-events-auto max-lg:left-[500px] max-md:left-[380px] max-md:w-[300px] max-md:top-[-90px] max-sm:w-[220px] max-sm:left-[250px] ${
                          isActive ? "active" : ""
                        }`}
                      >
                        <Link
                          href={linkManga(manga.name, manga.mangaId)}
                          className="inline-block w-full pb-[148%] overflow-hidden bg-[#eee] outline-none"
                          style={{
                            transform: "rotate(15deg)",
                            transition: "all .2s ease 0s",
                            WebkitTransition: "all .2s ease 0s",
                            boxShadow: "0 30px 30px rgba(0, 0, 0, .2)",
                            border: "20px solid #fff",
                            display: `${isActive ? "" : "none"}`,
                          }}
                        >
                          <Image
                            src={manga.poster}
                            alt=""
                            fill
                            className="absolute w-full h-full object-cover top-0 left-0 right-0 bottom-0"
                            style={{
                              transition: "all .5s ease 0s",
                              verticalAlign: "middle",
                              overflowClipMargin: "content-box",
                              overflow: "clip",
                              transform: "scale(1)",
                            }}
                          ></Image>
                        </Link>
                      </div>
                      <div className="max-w-[600px] w-full absolute top-[50%] left-[30px] z-[3] text-[#fff] px-[30px] max-xl:px-0 max-sm:mx-[-15px] translate-y-[-50%] pointer-events-auto">
                        <div className="text-[18px] leading-[1.3rem] font-semibold mb-[5px] max-lg:hidden">
                          Chapter: {manga.totalChapter} [EN]
                        </div>
                        <div className="text-[32px] leading-[1.3] font-semibold mb-[15px] overflow-hidden max-lg:text-[20px] max-sm:text-[16px]">
                          <Link href={linkManga(manga.name, manga.mangaId)}>{manga.name}</Link>
                        </div>
                        <div className="text-[1em] block font-normal mb-[30px] max-md:hidden max-xl:max-w-[460px]">
                          <div className="mb-[1rem] text-[14px] three-lines">
                            {manga.description}
                          </div>
                          <div className="block mb-[10px] max-lg:hidden">
                            {manga.genres &&
                              manga.genres.map((genre: string, i: number) => (
                                <span
                                  key={i}
                                  className="inline-block mr-[6px] mb-[6px] py-[0.3rem] px-[0.5rem] leading-[1] rounded-[0.2rem] text-[11px]"
                                  style={{
                                    border: "1px solid rgba(255,255,255,.5)",
                                  }}
                                >
                                  {genre}
                                </span>
                              ))}
                          </div>
                        </div>
                        <div className="h-[40px] max-md:h-[35px] flex">
                          {buttons.map((button, i) => (
                            <div
                              key={i}
                              className={`text-[#111] font-medium text-[14px] leading-[40px] px-[20px] max-md:px-[15px] rounded-[4px] text-center h-full mr-[10px] ${button.bgColor} flex justify-center items-center max-md:h-[30px]`}
                            >
                              <Link
                                href={linkManga(manga.name, manga.mangaId)}
                                className="max-md:text-[12px]"
                              >
                                {button.title}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlide;

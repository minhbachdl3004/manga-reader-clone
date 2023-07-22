import React, { Suspense } from "react";
import Navbar from "@/components/navbar/Navbar";
import HeroSlide from "@/components/hero-slide/HeroSlide";
import MangaTrending from "@/components/manga-trending/MangaTrending";
import Category from "@/components/common/category";
import RecommendManga from "@/components/recommend-manga/RecommendManga";
import { getMangas } from "./data/dataFetching";
import Loading from "@/components/manga-trending/loading";
import MangaRanking from "@/components/manga-ranking";
import MangaGrid from "@/components/grid/MangaList";
import { Header } from "@/components/common/heading/Header";

export default async function Home() {
  const posterManga = getMangas("/manga/poster-manga");
  const recommendManga = getMangas("/manga/recommended-manga");
  const trendingManga = getMangas("/manga/trending-manga");
  const latestManga = getMangas("/manga/get-all?page=1");

  //Wait for the Data Fetching to resolve first
  const posterMangaData = await posterManga;
  const recommendMangaData = await recommendManga;
  const latestMangaData = await latestManga;

  return (
    <div className="flex flex-col gap-[10px] max-md:gap-0">
      <div className="w-full h-[90px] pt-[10px] relative bg-[#1f1f1f] max-md:bg-[#7b36ce]">
        <Navbar />
      </div>
      <div>
        <HeroSlide mangas={posterMangaData} />
        <Suspense fallback={<Loading />}>
          <MangaTrending promise={trendingManga} />
          <div className="px-[20px]">
            <Category />
          </div>
          <RecommendManga promise={recommendManga} />
          <div className="manga-list__container">
            <div className="manga-list overflow-hidden max-xl:flex max-xl:flex-col max-xl:gap-0">
              <div className="w-full float-left mb-[40px] max-xl:mb-0 overflow-hidden">
                <section className="block mb-[40px] relative">
                  <Header title="Latest Updates" />
                  <MangaGrid mangas={latestMangaData} />
                </section>
              </div>
              <MangaRanking mangas={recommendMangaData} />
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}

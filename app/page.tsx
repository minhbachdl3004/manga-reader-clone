import React, { Suspense } from "react";
import Navbar from "@/components/navbar/Navbar";
import HeroSlide from "@/components/hero-slide/HeroSlide";
import MangaTrending from "@/components/manga-trending/MangaTrending";
import Category from "@/components/common/category";
import RecommendManga from "@/components/recommend-manga/RecommendManga";
import { getMangas } from "./data/dataFetching";
import Loading from "@/components/manga-trending/loading";
import LatestUpdate from "@/components/latest-update/LatestUpdate";
import MangaRanking from "@/components/manga-ranking";

export default async function Home() {
  const posterManga = getMangas("/manga/poster");
  const recommendManga = getMangas("/manga/recommended");
  const trendingManga = getMangas("/manga/trending-manga");
  const latestManga = getMangas("/manga/get-all?page=1");

  //Wait for the Carosel Poster Manga to resolve first
  const data = await posterManga;
  const recommendMangaData = await recommendManga;

  return (
    <>
      <div className="w-full h-[90px] pt-[20px] mb-[20px]">
        <Navbar />
      </div>
      <HeroSlide mangas={data} />
      <Suspense fallback={<Loading />}>
        <MangaTrending promise={trendingManga} />
      </Suspense>
      <Category />
      <Suspense fallback={<Loading />}>
        <RecommendManga promise={recommendManga} />
      </Suspense>
      <div className="manga-list__container">
        <div className="manga-list overflow-hidden max-xl:flex max-xl:flex-col max-xl:gap-0">
          <Suspense>
            <LatestUpdate promise={latestManga} />
          </Suspense>
          <Suspense>
            <MangaRanking mangas={recommendMangaData} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

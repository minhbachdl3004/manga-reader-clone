"use client";
import React, { Suspense } from "react";
import HeroSlide from "@/components/hero-slide/HeroSlide";
import MangaTrending from "@/components/manga-trending/MangaTrending";
import Category from "@/components/common/category";
import RecommendManga from "@/components/recommend-manga/RecommendManga";
import LatestUpdate from "@/components/latest-update/LatestUpdate";
import MangaRanking from "@/components/manga-ranking";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="w-full relative mx-auto my-0">
      <Navbar />
      <HeroSlide />
      <MangaTrending />
      <Category />
      <RecommendManga />
      <div className="manga-list__container">
        <div className="manga-list overflow-hidden">
          <LatestUpdate />
          <MangaRanking />
        </div>
      </div>
    </div>
  );
}

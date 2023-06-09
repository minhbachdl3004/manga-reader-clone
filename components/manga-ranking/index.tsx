"use client";
import React, { useState } from "react";
import { Header } from "@/components/common/heading/Header";
import RankingList from "./RankingList";
import Tab from "./Tab";
import MangaCard from "./MangaCard";

const MangaRanking = () => {
  const [selectedId, setSelectedId] = useState<number>(0);
  const handleChange = (id: number) => {
    setSelectedId(id);
  };
  return (
    <section className="mb-[30px] ml-[20px] block relative">
      <Header title="Most Viewed" />
      <RankingList>
        <Tab onChange={handleChange} selectedId={selectedId} />
        <MangaCard />
      </RankingList>
    </section>
  );
};

export default MangaRanking;

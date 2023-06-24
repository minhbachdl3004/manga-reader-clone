"use client";
import React from "react";
import { PromiseProps, mangaProps } from "utils/type";
import MangaGrid from "@/components/grid/MangaList";


const LatestUpdate = async ({ promise }: PromiseProps) => {
  const manga = await promise;
  return <MangaGrid title="Latest Updates" mangas={manga} />;
};

export default LatestUpdate;

"use client";
import React from "react";
import { PromiseProps, mangaProps } from "utils/type";
import useSWR from "swr";
import fetcher from "configs/fetcherConfig";
import MangaGrid from "@/components/grid/MangaList";

const arr = [1, 2, 3, 4, 5, 6];

interface Props {
  mangas: mangaProps;
  isLoading: any;
  isError: any;
}

const GetAllManga = () => {
  const { data, error, isLoading } = useSWR("manga/get-all?page=1", fetcher);

  return {
    mangas: data,
    isLoading,
    isError: error,
  };
};

const LatestUpdate = async ({ promise }: PromiseProps) => {
  const manga = await promise;
  return <MangaGrid title="Latest Updates" mangas={manga} />;
};

export default LatestUpdate;

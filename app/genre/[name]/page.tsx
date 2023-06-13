"use client";
import fetcher from "configs/fetcherConfig";
import { Suspense } from "react";
import useSWR from "swr";
import { mangaProps } from "utils/type";
import Loading from "./loading";

interface Props {
  mangas: mangaProps;
  isLoading: any;
  isError: any;
}
const GetMangaByGenre = (name: string) => {
  const { data, error, isLoading } = useSWR(
    `manga/genre/${name}?page=1`,
    fetcher
  );

  return {
    mangas: data,
    isLoading,
    isError: error,
  };
};

export default function Page({ params }: { params: { name: string } }) {
  const { mangas, isLoading, isError }: Props = GetMangaByGenre(params.name);

  return (
    <>
      <ul>
        {isLoading ? (
          <Loading />
        ) : (
          mangas.mangas.map((manga) => <li key={manga._id}>{manga.name}</li>)
        )}
      </ul>
    </>
  );
}

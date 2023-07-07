import React from "react";
import { MangaPoster2 } from "@/components/common/MangaPoster";
import Tick from "@/components/manga-card/Tick";
import Detail from "@/components/common/Detail";
import { Header } from "@/components/common/heading/Header";
import Loading from "@/components/recommend-manga/loading";
import { MangaProps, mangaProps } from "utils/type";
import { linkManga } from "app/data/dataFetching";

interface Props {
  mangas: mangaProps;
}

const MangaGrid = ({ mangas }: Props) => {
  return (
    <>
      {mangas.mangas.length > 0 ? (
        <div className="my-0 mx-[-7px] list-items max-md:flex max-md:flex-col">
          {mangas.mangas.map((manga: MangaProps) => (
            <div
              className="p-[1em] mb-[12px] rounded-[0.75em] bg-[#2f2f2f] float-left mx-[7px] relative"
              style={{ width: "calc(100% - 10px)" }}
              key={manga._id}
            >
              <MangaPoster2
                link={linkManga(manga.name, manga.mangaId) || "/"}
                poster={manga.poster}
                styles="top-[1em] left-[1em] w-[140px] absolute h-auto pb-[200px]"
              >
                <Tick />
              </MangaPoster2>
              <Detail
                name={manga.name}
                genres={manga.genres}
                latestChapters={manga.chapters.slice(0, 3)}
                link={linkManga(manga.name, manga.mangaId) || "/"}
              />
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default MangaGrid;

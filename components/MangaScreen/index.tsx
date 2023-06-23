import React from "react";
import type { Metadata } from "next";
import Category from "@/components/common/category";
import { Header } from "@/components/common/heading/Header";
import BreadCrumb from "@/components/common/BreadCrumb";
import { MangaPoster2 } from "@/components/common/MangaPoster";
import Detail from "@/components/common/Detail";
import Tick from "@/components/manga-card/Tick";
import { homepageUrl } from "utils/urlConfig";
import { MangaProps, mangaProps } from "utils/type";

interface Props {
  searchPage?: boolean;
  newName: string;
  mangas: mangaProps;
  type: string;
  query?: string;
}

const MangaScreen = ({ query, searchPage = false, newName, mangas, type }: Props) => {
  return (
    <ul>
      <BreadCrumb searchPage={searchPage} name={newName} type={type} />
      <div className="manga-list gap-[10px] overflow-hidden max-xl:flex max-xl:flex-col max-xl:gap-0">
        <div className="w-full float-left mb-[40px] max-xl:mb-0 overflow-hidden">
          <section className="block mb-[40px] relative">
            <Header title={`${searchPage ? `Search result for: ${query}` : `${newName} Manga` }`} />
            <div className="my-0 mx-[-7px] list-items max-md:flex max-md:flex-col">
              {mangas.mangas.map((manga: MangaProps) => (
                <div
                  className="p-[1em] mb-[12px] rounded-[0.75em] bg-[#2f2f2f] float-left mx-[7px] relative"
                  style={{ width: "calc(100% - 10px)" }}
                  key={manga._id}
                >
                  <MangaPoster2
                    poster={manga.poster}
                    styles="top-[1em] left-[1em] w-[140px] absolute h-auto pb-[200px]"
                  >
                    <Tick isDisplay={true} />
                  </MangaPoster2>
                  <Detail
                    name={manga.name}
                    genres={manga.genres}
                    latestChapters={manga.chapters.slice(0, 3)}
                    link={
                      `${homepageUrl}/` +
                      manga.name.toLowerCase().replaceAll(" ", "-") +
                      `-${manga.mangaId}`
                    }
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="">
          <Header title="Genres" styles="ml-[20px]" />
          <Category />
        </div>
      </div>
    </ul>
  );
};

export default MangaScreen;

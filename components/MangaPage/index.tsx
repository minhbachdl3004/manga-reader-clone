import React from "react";
import Category from "@/components/common/category";
import { Header } from "@/components/common/heading/Header";
import BreadCrumb from "@/components/common/BreadCrumb";
import { MangaProps, mangaProps } from "utils/type";
import MangaGrid from "../grid/MangaList";

interface Props {
  searchPage?: boolean;
  genreName: string;
  mangas: mangaProps;
  type: string;
  query?: string;
}

const MangaPage = ({
  query,
  searchPage = false,
  genreName,
  mangas,
  type,
}: Props) => {
  return (
    <ul>
      <BreadCrumb searchPage={searchPage} name={genreName} type={type} />
      <div className="manga-list gap-[10px] overflow-hidden max-xl:flex max-xl:flex-col max-xl:gap-0">
        <div className="w-full float-left mb-[40px] max-xl:mb-0 overflow-hidden">
          <section className="block mb-[40px] relative">
            <Header
              title={`${
                searchPage
                  ? `Search result for: ${query}`
                  : `${genreName} Manga`
              }`}
            />
            <MangaGrid mangas={mangas} />
          </section>
        </div>
        <div className="">
          <Header title="Genres" styles="ml-[20px]" />
          <div className="px-[20px]">
            <Category />
          </div>
        </div>
      </div>
    </ul>
  );
};

export default MangaPage;

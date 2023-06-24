"use client";
import React, { useState } from "react";
import { Header, Heading2 } from "@/components/common/heading/Header";
import RankingList from "./RankingList";
import Tab from "./Tab";
import RankingNumber from "./RankingNumber";
import { MangaPoster3 } from "@/components/common/MangaPoster";
import Detail from "@/components/common/detail/Detail";
import Genres from "@/components/common/genres/Genres";
import Chapter from "@/components/common/chapter/Chapter";
import { MangaProps, PromiseProps, mangaProps } from "utils/type";


const MangaRanking = ({ mangas }: any) => {
  const [selectedId, setSelectedId] = useState<number>(0);
  const handleChange = (id: number) => {
    setSelectedId(id);
  };
  return (
    <section className="mb-[30px] ml-[20px] max-xl:ml-0 block relative">
      <Header title="Most Viewed" />
      <RankingList>
        <Tab onChange={handleChange} selectedId={selectedId} />
        {!mangas ? (
          <p>Loading...</p>
        ) : (
          <>
            {mangas &&
              mangas.mangas.map((manga : MangaProps, i : number) => (
                <div
                  key={manga._id}
                  className="relative pr-[60px] py-[15px] pl-[80px] mb-[10px]"
                >
                  <RankingNumber number={(i + 1).toString()} />
                  <MangaPoster3
                    poster={manga.poster}
                    styles="poster-most-viewed"
                  ></MangaPoster3>
                  <Detail styles="min-h-auto text-[14px] leading-[1.4em] block">
                    <Heading2
                      styles="text-[15px] text-[#ddd] max-w-[320px] font-semibold leading-[1.4em] mb-[5px] overflow-hidden"
                      title={manga.name}
                      link={manga.name.toLowerCase().replace(/\s/g, '-').replace(/[^a-zA-Z0-9-]/g, '') + `-${manga.mangaId}`}
                    />
                    <div className="text-[.9em] text-[#ddd] whitespace-normal overflow-hidden text-ellipsis">
                      <span>EN</span>
                      <span className="w-[4px] h-[4px] rounded-[50%] bg-[#666] inline-block my-[3px] mx-[6px]"></span>
                      <Genres
                        genres={manga.genres}
                        styles="inline"
                        textColor="text-[#ddd]"
                      />
                      <span
                        className=" absolute bottom-[15px] right-0 px-[6px] rounded-[4px] text-[#aaa] text-[12px]"
                        style={{ border: "1px solid #3f3f3f" }}
                      >
                        {manga.views} views
                      </span>
                      <Chapter
                        chapterNumber={"Chap " + manga.totalChapter.toString()}
                        styles="block mt-[5px]"
                      />
                    </div>
                  </Detail>
                </div>
              ))}
          </>
        )}
      </RankingList>
    </section>
  );
};

export default MangaRanking;

import React from "react";
import { apiUrl } from "utils/urlConfig";
import { MangaProps, chapterProps, specificMangaProps } from "utils/type";
import Image from "next/image";
import { getMangaById, linkManga } from "app/data/dataFetching";
import Header from "./Header";

export default async function Page({
  params,
}: {
  params: { name: string; id: string };
}) {
  const nameArr = params.name.split("-");
  const mangaId = nameArr[nameArr.length - 1];
  const chapterId = params.id.replace("-", " ");
  const currentChapter = "Chapter " + chapterId.split(" ")[1];
  const { manga }: specificMangaProps = await getMangaById(mangaId);
  const chapter: chapterProps[] = manga.chapters.filter(
    (chapter: chapterProps) => chapter.chapterId.toLowerCase() === chapterId
  );

  return (
    <div className="max-w-[1400px] w-full overflow-auto flex flex-col bg-[#141414]">
      <Header
        currentChapterId={chapter[0]._id}
        name={manga.name}
        link={linkManga(manga.name, manga.mangaId)}
        chapters={manga.chapters}
        currentChapter={currentChapter}
      />
      <div className="pt-[100px] max-w-[1400px] w-full px-[20px] flex justify-center items-center">
        <div className="flex flex-col" style={{ transformOrigin: "top" }}>
          {!chapter
            ? null
            : chapter[0].images.map((image: any, i: number) => (
                <div
                  key={i}
                  className="block w-full mt-0 mx-auto min-h-[200px] relative"
                >
                  <div>
                    <div className="c-1-area">
                      <div className="paper-loading"></div>
                      <p>Loading...</p>
                    </div>
                  </div>
                  <Image
                    alt=""
                    src={image}
                    width={800}
                    height={200}
                    loading="lazy"
                    className="inline-block max-w-full h-auto relative z-[2] object-cover"
                  ></Image>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { apiUrl } from "utils/urlConfig";
import { MangaProps, chapterProps, specificMangaProps } from "utils/type";
import Image from "next/image";
import { getMangaById } from "app/data/dataFetching";

async function getMangaByMangaId(mangaId: string, chapterId: string) {
  const res = await fetch(`${apiUrl}/manga/search?mangaId=${mangaId}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return undefined;
  }

  return res.json();
}

export default async function Page({
  params,
}: {
  params: { name: string; id: string };
}) {
  const nameArr = params.name.split("-");
  const mangaId = nameArr[nameArr.length - 1];
  const chapterId = params.id.replace("-", " ");
  const { manga }: specificMangaProps = await getMangaById(mangaId);
  const chapter: chapterProps[] = manga.chapters.filter(
    (chapter: chapterProps) => chapter.chapterId.toLowerCase() === chapterId
  );

  return (
    <div className="max-w-[1400px] w-full overflow-auto flex bg-[#1f1f1f]">
      <div className="max-w-[1400px] w-full px-[20px] flex justify-center items-center">
        <div
          className="pt-[100px] flex flex-col"
          style={{ transformOrigin: "top" }}
        >
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
